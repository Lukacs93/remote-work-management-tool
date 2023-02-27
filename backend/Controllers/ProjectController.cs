using backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController, Route("/projects")]
public class ProjectController : ControllerBase
{
    private readonly RemotivateContext _context;

    public ProjectController(RemotivateContext context)
    {
        _context = context;
    }
}