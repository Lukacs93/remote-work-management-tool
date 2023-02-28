using backend.Data;
using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Services.ProjectServiceLayer;

public class ProjectService : IProjectService
{
    private readonly RemotivateContext _context;

    public ProjectService(RemotivateContext context)
    {
        _context = context;
    }

    public Task<List<Project>> GetAllProjects()
    {
        throw new NotImplementedException();
    }

    public Task<Project> GetProjectById(long id)
    {
        throw new NotImplementedException();
    }

    public Task CreateProject(Project project)
    {
        throw new NotImplementedException();
    }

    public Task UpdateProject(Project project)
    {
        throw new NotImplementedException();
    }

    public Task DeleteProject(long Id)
    {
        throw new NotImplementedException();
    }
}