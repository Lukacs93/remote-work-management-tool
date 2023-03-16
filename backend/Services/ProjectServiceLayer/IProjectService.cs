﻿using backend.Models.Entities;

namespace backend.Services.ProjectServiceLayer;

public interface IProjectService
{
    Task<List<Project>> GetAllProjects();
    Task<Project> GetProjectById(long id);
    Task<Project> CreateProject(string DeadLine, Project project);
    Task UpdateProject(Project project, long id);
    Task DeleteProject(long id);
}