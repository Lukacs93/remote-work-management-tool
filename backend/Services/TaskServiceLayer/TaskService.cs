using backend.Data;

namespace backend.Services.TaskServiceLayer;

public class TaskService : ITaskService
{
    private readonly RemotivateContext _context;

    public TaskService(RemotivateContext context)
    {
        _context = context;
    }

    public Task<IEnumerable<Task>> GetAllTasks()
    {
        throw new NotImplementedException();
    }

    public Task<Task> GetTaskById(int id)
    {
        throw new NotImplementedException();
    }

    public Task CreateTask(Task task)
    {
        throw new NotImplementedException();
    }

    public Task UpdateTask(Task task)
    {
        throw new NotImplementedException();
    }

    public Task DeleteTask(Task task)
    {
        throw new NotImplementedException();
    }
}