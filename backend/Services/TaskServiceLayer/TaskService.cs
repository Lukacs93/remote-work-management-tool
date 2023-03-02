using backend.Data;
using backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;
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
    public async Task<List<User>> GetUsersByTaskId(long id)
    {
        var task = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == id);
        Console.WriteLine(task.UsersOnTask);
        return task.UsersOnTask;
    }
    public async Task<User> AddUserToTask(long id, User user)
    {
        var taskToAddUser=await _context.Tasks.FirstOrDefaultAsync(p=> p.Id == id);
        if(_context.Users.Any(i=>i.Id == user.Id))
        {
            user =  _context.Users.First(i=>i.Id==user.Id);
        }
        if(taskToAddUser!=null)
        {
            if (taskToAddUser.UsersOnTask == null)
            {
                taskToAddUser.UsersOnTask= new List<User>();
            }
            taskToAddUser.UsersOnTask.Add(user);
            await _context.SaveChangesAsync();
        }     
        return user;
    }
    public async Task<TaskItem> CreateTask(long projectId, TaskItem task)
    {
       var projectToAddTask = await _context.Projects.FirstOrDefaultAsync(p => p.Id == projectId);
       
       if (projectToAddTask != null)
       {
           _context.Tasks.Add(task);
           projectToAddTask.Tasks?.Add(task);
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