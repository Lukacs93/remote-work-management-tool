using backend.Models.Entities;
using backend.Models.Requests;
using backend.Services.UserServiceLayer;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

public class AuthenticationController : Controller
{
    private readonly IUserService _userService;
    
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
    
        var existingUserByEmail = await _userService.GetByEmail(registerRequest.Email);
        if (existingUserByEmail != null)
        {
            return Conflict(new ErrorResponse("Email already exist"));
        }
        
        var existingUserByUsername = await _userService.GetByUsername(registerRequest.Username);
        if (existingUserByUsername != null)
        {
            return Conflict(new ErrorResponse("Username already exist"));
        }

        //Create user and store it
        string passwordHash = _passwordHasher.HashPassword(registerRequest.password);
        var registrationUser = new TestUser()
        {
            Email = registerRequest.Email,
            Username = registerRequest.Username,
            PasswordHash = passwordHash
        };

        await _userService.Create(registrationUser);
        return Ok();
    }

}