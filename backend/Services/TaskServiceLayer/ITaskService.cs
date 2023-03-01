using backend.Models.Entities;

namespace backend.Services.TaskServiceLayer;

public interface ITaskService
{
    Task<List<TaskItem>> GetAllTasks();
    Task<TaskItem?> GetTaskById(long id);
    Task<TaskItem> CreateTask(long projectId, TaskItem task);
    Task<TaskItem> UpdateTask(TaskItem task);
    Task<TaskItem> DeleteTask(long id);
}