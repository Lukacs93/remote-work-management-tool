using backend.Models.Entities;
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
    
    [HttpGet]
    public async Task<List<Project>> GetAllProjects()
    {
        return await _projectService.GetAllProjects();
    }

    [HttpPost]
    public async Task CreateProject([FromBody] Project project)
    {
        await _projectService.CreateProject(project);
    }

    [HttpGet("{id}")]
    public async Task<Project> GetProjectByID(long id)
    {
        return await _projectService.GetProjectById(id);
    }



    [HttpPut("{id}")]
    public async Task UpdateProject([FromBody] Project project, long id)
    {
       await _projectService.UpdateProject(project, id);
    }


    [HttpDelete("{id}")]
    public async Task DeleteProject(long id)
    {
        await _projectService.DeleteProject(id);
    }
}