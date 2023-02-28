using backend.Data;
using backend.Services;
using backend.Services.ProjectServiceLayer;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController, Route("/projects")]
public class ProjectController : ControllerBase
{
    private readonly IProjectService _projectService;

    public ProjectController(IProjectService projectService)
    {
        _projectService = projectService;
    }
}