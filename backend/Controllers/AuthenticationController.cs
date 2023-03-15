using backend.Models.Requests;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

public class AuthenticationController : Controller
{
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
    {
        //validate RegisterRequest data
        if (!ModelState.IsValid)
        {
            BadRequest();
        }
        
        if (registerRequest.password != registerRequest.ConfirmPassword)
        {
            return BadRequest(new ErrorResponse("Password does not match confirm password"));
        }
    
    }

}