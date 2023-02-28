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

    [HttpGet]
    public async Task<TaskItem?> GetTaskById(long id)
    {
        return await _taskService.GetTaskById(id);
    }

    [HttpPost("{projectId:long}")]
    public async Task<TaskItem> CreateTask(long projectId, [FromBody] TaskItem task)
    {
        return await _taskService.CreateTask(projectId, task);
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