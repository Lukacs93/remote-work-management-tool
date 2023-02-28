using backend.Models.Entities;

namespace backend.Services.TaskServiceLayer;

public interface ITaskService
{
    Task<List<TaskItem>> GetAllTasks();
    Task<TaskItem?> GetTaskById(int id);
    Task<TaskItem> CreateTask(long projectId, TaskItem task);
    Task UpdateTask(TaskItem task);
    Task DeleteTask(long id);
}