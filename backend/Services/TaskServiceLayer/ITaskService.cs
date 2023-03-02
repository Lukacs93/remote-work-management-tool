using backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services.TaskServiceLayer;

public interface ITaskService
{
    Task<List<TaskItem>> GetAllTasks();
    Task<TaskItem?> GetTaskById(long id);
    Task<List<User>> GetUsersByTaskId(long id);
    Task<User> AddUserToTask(long id, [FromBody] User user);
    Task<TaskItem> CreateTask(long projectId, TaskItem task);
    Task<TaskItem> UpdateTask(TaskItem task);
    Task<TaskItem> DeleteTask(long id);
}