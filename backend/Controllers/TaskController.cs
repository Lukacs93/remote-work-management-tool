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
}