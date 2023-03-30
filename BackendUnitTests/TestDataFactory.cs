using backend.Models.Entities;

namespace BackendUnitTests;

public static class TestDataFactory
{
    public static List<TaskItem> GetTestTasks()
    {
        return new List<TaskItem>
        {
            new TaskItem { Id = 1, Description = "Task description1", Name = "Task 1", ProjectId = 1, UsersOnTask = new List<User>() },
            new TaskItem { Id = 2, Description = "Task description2", Name = "Task 2", ProjectId = 2, UsersOnTask = new List<User>() },
            new TaskItem { Id = 3, Description = "Task description3", Name = "Task 3", ProjectId = 3, UsersOnTask = new List<User>() }
        };
    }

    public static TaskItem GetTestTask(int id)
    {
        return new TaskItem { Id = id, Description = $"Task description{id}", Name = $"Task {id}", ProjectId = id, UsersOnTask = new List<User>() };
    }

    public static TaskItem GetTestTaskWithUsers(int id, List<User> users)
    {
        return new TaskItem { Id = id, Description = $"Task description{id}", Name = $"Task {id}", ProjectId = id, UsersOnTask = users };
    }

    public static List<User> GetTestUsers()
    {
        return new List<User>
        {
            new User { Id = 1, Email = "test@test.com", Role = "User", Username = "User 1", FirstName = "TestFirstName", LastName = "TestLAstName", PasswordHash = "hashedPass"},
            new User { Id = 2, Email = "test@test.com", Role = "User", Username = "User 2", FirstName = "TestFirstName", LastName = "TestLAstName", PasswordHash = "hashedPass"}
        };
    }
}