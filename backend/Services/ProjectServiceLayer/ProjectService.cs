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
            .Include(p => p.UsersInTheProject)
            .ToListAsync();
    }

    public async Task<Project> GetProjectById(long id)
    {
        return await _context.Projects
            .Where(p => p.Id == id)
            .Include(p => p.Tasks)
            .FirstAsync();
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

    public async Task UpdateProject(Project project)
    {
        var updatedProject = await GetProjectById(project.Id);

        if (updatedProject != null)
        {
            updatedProject.UsersInTheProject = project.UsersInTheProject;
            updatedProject.ProjectStatus = project.ProjectStatus;
            updatedProject.Tasks = project.Tasks;
            updatedProject.DateId = project.DateId;
            updatedProject.ManagerId = project.ManagerId;

        }
         await _context.SaveChangesAsync();
    }

    public async Task DeleteProject(long id)
    {
        Project removedProject = await GetProjectById(id);
        _context.Projects.Remove(removedProject);
        await _context.SaveChangesAsync();
    }
}