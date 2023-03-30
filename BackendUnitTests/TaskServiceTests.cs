using backend.Data;
using backend.Models.Entities;
using backend.Services.TaskServiceLayer;
using Microsoft.EntityFrameworkCore;
using Moq;


namespace BackendUnitTests;


public class TaskServiceTests
{
    private Mock<RemotivateContext> _contextMock;
    private TaskService _taskService;

    [SetUp]
    public void Setup()
    {
        _contextMock = new Mock<RemotivateContext>(new DbContextOptions<RemotivateContext>());
        _taskService = new TaskService(_contextMock.Object);
    }

    [Test]
    public async Task GetAllTasks_ReturnsTasks()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<RemotivateContext>()
            .UseInMemoryDatabase(databaseName: "GetAllTasks_ReturnsTasks")
            .Options;

        using (var context = new RemotivateContext(options))
        {
            var tasks = new List<TaskItem>
            {
                new TaskItem { Id = 1, Description = "Task description1", Name = "Task 1", ProjectId = 1, UsersOnTask = new List<User>() },
                new TaskItem { Id = 2, Description = "Task description2", Name = "Task 2", ProjectId = 2, UsersOnTask = new List<User>() },
                new TaskItem { Id = 3, Description = "Task description3", Name = "Task 3", ProjectId = 3, UsersOnTask = new List<User>() }
            };

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
            var task = new TaskItem { Id = 1, Description = "Task description1", Name = "Task 1", ProjectId = 1, UsersOnTask = new List<User>() };

            context.Tasks.Add(task);
            context.SaveChanges();
        }

        using (var context = new RemotivateContext(options))
        {
            var taskService = new TaskService(context);

            // Act
            var result = await taskService.GetTaskById(1);

            // Assert
            Assert.AreEqual(1, result.Id);
            Assert.AreEqual("Task description1", result.Description);
            Assert.AreEqual("Task 1", result.Name);
            Assert.AreEqual(1, result.ProjectId);
            Assert.IsEmpty(result.UsersOnTask);
        }
    }
}