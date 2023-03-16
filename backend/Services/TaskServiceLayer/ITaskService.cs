﻿using backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services.TaskServiceLayer;

public interface ITaskService
{
    Task<List<TaskItem>> GetAllTasks();

    Task<TaskItem?> GetTaskById(long id);

    Task<List<User>?> GetUsersByTaskId(long id);

    Task AddUserToTask(long id, User user);

    Task<User> RemoveUserFromTask(long id, User user);

    Task<TaskItem> CreateTask(long projectId, TaskItem task);

    Task<TaskItem> UpdateTask(TaskItem task, long id);

    Task<TaskItem> DeleteTask(long id);
}