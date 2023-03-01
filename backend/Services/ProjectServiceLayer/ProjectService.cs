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

    public async Task<List<Project>> GetAllProjects()
    {
        return await _context.Projects
            .Include(p => p.Tasks)
            .ToListAsync();
    }

    public Task<Project> GetProjectById(long id)
    {
        throw new NotImplementedException();
    }

    public async Task<Project> CreateProject(Project project)
    {
        _context.Projects.Add(project);
        
        await _context.SaveChangesAsync();

        return await _context.Projects
            .Where(p => p.Id == project.Id)
            .Include(p => p.Tasks)
            .FirstOrDefaultAsync() ?? throw new InvalidOperationException();
    }

    public Task<Project> UpdateProject(Project project)
    {
        throw new NotImplementedException();
    }

    public Task<Project> DeleteProject(long id)
    {
        throw new NotImplementedException();
    }
}