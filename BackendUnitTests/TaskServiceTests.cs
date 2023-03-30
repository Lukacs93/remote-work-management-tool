using backend.Data;
using backend.Services.TaskServiceLayer;
using Microsoft.EntityFrameworkCore;

namespace BackendUnitTests;

public class TaskServiceTests
{
    [Test]
    public async Task GetAllTasks_ReturnsTasks()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<RemotivateContext>()
            .UseInMemoryDatabase(databaseName: "GetAllTasks_ReturnsTasks")
            .Options;

        using (var context = new RemotivateContext(options))
        {
            var tasks = TestDataFactory.GetTestTasks();

            context.Tasks.AddRange(tasks);
            context.SaveChanges();
        }

        using (var context = new RemotivateContext(options))
        {
            var taskService = new TaskService(context);

            // Act
            var result = await taskService.GetAllTasks();

            // Assert
            Assert.AreEqual(3, result.Count);
            Assert.AreEqual("Task description1", result[0].Description);
            Assert.AreEqual("Task description2", result[1].Description);
            Assert.AreEqual("Task description3", result[2].Description);
        }
    }
    [Test]
    public async Task GetTaskById_ReturnsTask()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<RemotivateContext>()
            .UseInMemoryDatabase(databaseName: "GetTaskById_ReturnsTask")
            .Options;

        using (var context = new RemotivateContext(options))
        {
            var task = TestDataFactory.GetTestTask(1);

            context.Tasks.Add(task);
            context.SaveChanges();
        }

        using (var context = new RemotivateContext(options))
        {
            var taskService = new TaskService(context);

            // Act
            var result = await taskService.GetTaskById(1);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.Id);
            Assert.AreEqual("Task description1", result.Description);
        }
    }

    [Test]
    public async Task GetUsersByTaskId_ReturnsUsers()
    {
        // Arrange
        var taskId = 1;
        var task = TestDataFactory.GetTestTaskWithUsers(taskId, TestDataFactory.GetTestUsers());

        var options = new DbContextOptionsBuilder<RemotivateContext>()
            .UseInMemoryDatabase(databaseName: "GetUsersByTaskId_ReturnsUsers")
            .Options;

        using (var context = new RemotivateContext(options))
        {
            context.Tasks.Add(task);
            context.SaveChanges();
        }

        using (var context = new RemotivateContext(options))
        {
            var taskService = new TaskService(context);

            // Act
            var result = await taskService.GetUsersByTaskId(taskId);

            // Assert
            Assert.AreEqual(task.UsersOnTask.Count, result.Count);
            for (int i = 0; i < task.UsersOnTask.Count; i++)
            {
                Assert.AreEqual(task.UsersOnTask[i].Id, result[i].Id);
                Assert.AreEqual(task.UsersOnTask[i].Username, result[i].Username);
            }
        }
    }
}