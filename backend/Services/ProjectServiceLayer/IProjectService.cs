using backend.Models.Entities;

namespace backend.Services.ProjectServiceLayer;

public interface IProjectService
{
    Task<List<Project>> GetAllProjects();
    Task<Project> GetProjectById(long id);
    Task<Project> CreateProject(Project project);
    Task<Project> UpdateProject(Project project);
    Task<Project> DeleteProject(long id);
}