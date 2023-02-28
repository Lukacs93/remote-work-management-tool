using backend.Models.Entities;

namespace backend.Services.ProjectServiceLayer;

public interface IProjectService
{
    Task<List<Project>> GetAllProjects();
    Task<Project> GetProjectById(long id);
    Task CreateProject(Project project);
    Task UpdateProject(Project project);
    Task DeleteProject(long id);
}