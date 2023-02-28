using backend.Data;
using backend.Models.Entities;

namespace backend.Services.ProjectServiceLayer;

public class ProjectService : IProjectService
{
    private readonly RemotivateContext _context;

    public ProjectService(RemotivateContext context)
    {
        _context = context;
    }

    public Task<IEnumerable<Project>> GetAllProjects()
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

    public Task DeleteProject(Project project)
    {
        throw new NotImplementedException();
    }
}