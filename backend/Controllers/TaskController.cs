using backend.Data;
using backend.Models.Entities;
using backend.Services;
using backend.Services.ProjectServiceLayer;
using backend.Services.TaskServiceLayer;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController, Route("/tasks")]
public class TaskController : ControllerBase
{
    private readonly ITaskService _taskService;

    public TaskController(ITaskService taskService)
    {
        _taskService = taskService;
    }

    [HttpGet]
    public async Task<List<TaskItem>> GetAllTasks()
    {
        return await _taskService.GetAllTasks();
    }

    [HttpGet("{id:long}")]
    public async Task<TaskItem?> GetTaskById(long id)
    {
        return await _taskService.GetTaskById(id);
    }
    [HttpGet("{id:long}/users")]
    public async Task<List<User>> GetUsersByTaskId(long id)
    {
        return await _taskService.GetUsersByTaskId(id);
    }
    [HttpPost("/projects/{projectId:long}/add-task")]
    public async Task<TaskItem> CreateTask(long projectId, [FromBody] TaskItem task)
    {
        return await _taskService.CreateTask(projectId, task);
    }
    [HttpPost("/{id:long}")]
    public async Task<User> AddUserToTask(long id, [FromBody] User user)
    {
        return await _taskService.AddUserToTask(id, user);
    }
    [HttpPut]
    public async Task<TaskItem> UpdateTask(TaskItem task)
    {
        return await _taskService.UpdateTask(task);
    }

    [HttpDelete("{id:long}")]
    public async Task<TaskItem> DeleteTask(long id)
    {
        return await _taskService.DeleteTask(id);
    }
}