using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController, Route("/tasks")]
public class TaskController : ControllerBase
{
    private readonly RemotivateContext _context;

    public TaskController(RemotivateContext context)
    {
        _context = context;
    }
}