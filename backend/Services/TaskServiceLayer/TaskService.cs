using backend.Data;
using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Services.TaskServiceLayer;

public class TaskService : ITaskService
{
    private readonly RemotivateContext _context;

    public TaskService(RemotivateContext context)
    {
        _context = context;
    }

    public async Task<List<TaskItem>> GetAllTasks()
    {
        return await _context.Tasks.ToListAsync();
    }

    public async Task<TaskItem?> GetTaskById(long id)
    {
        return await _context.Tasks.FirstOrDefaultAsync(t => t.Id == id);
    }

    public async Task<TaskItem> CreateTask(long projectId, TaskItem task)
    {
       var projectToAddTask = await _context.Projects.FirstOrDefaultAsync(p => p.Id == projectId);

       _context.Tasks.Add(task);
      // projectToAddTask?.Tasks?.Add(task);
      
      //correct to always add task to project
       if (projectToAddTask != null)
       {
           projectToAddTask.Tasks.Add(task);
       }
       
       await _context.SaveChangesAsync();

       return task;
    }

    public async Task<TaskItem> UpdateTask(TaskItem task)
    {
        var taskToUpdate = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == task.Id);
        
        if (taskToUpdate != null)
        {
            if (!string.IsNullOrEmpty(task.Description))
            {
                taskToUpdate.Description = task.Description;
            }

            if (!string.IsNullOrEmpty(task.Note))
            {
                taskToUpdate.Note = task.Note;
            }

            if (task.TaskStatus != null)
            {
                taskToUpdate.TaskStatus = task.TaskStatus;
            }
        }

        await _context.SaveChangesAsync();

        return taskToUpdate;
    }

    public async Task<TaskItem> DeleteTask(long id)
    {
        var taskToRemove = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == id);

        if (taskToRemove != null)
        {
            _context.Tasks.Remove(taskToRemove);
        }

        await _context.SaveChangesAsync();

        return taskToRemove;
    }
}