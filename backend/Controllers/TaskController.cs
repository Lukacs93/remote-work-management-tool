using backend.Data;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController, Route("/tasks")]
public class TaskController : ControllerBase
{
    private readonly IProjectService _projectService;

    public TaskController(IProjectService projectService)
    {
        _projectService = projectService;
    }
}