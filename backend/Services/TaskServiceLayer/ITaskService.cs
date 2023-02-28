namespace backend.Services.TaskServiceLayer;

public interface ITaskService
{
    Task<IEnumerable<Task>> GetAllTasks();
    Task<Task> GetTaskById(int id);
    Task CreateTask(Task task);
    Task UpdateTask(Task task);
    Task DeleteTask(Task task);
}