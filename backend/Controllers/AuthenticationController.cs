using backend.Models.Entities;
using backend.Models.Requests;
using backend.Models.Responses;
using backend.Services.PasswordHashers;
using backend.Services.UserServiceLayer;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

public class AuthenticationController : Controller
{
    private readonly IUserService _userService;
    private readonly IPasswordHasher _passwordHasher;

    public AuthenticationController(IUserService userService, IPasswordHasher passwordHasher)
    {
        _userService = userService;
        _passwordHasher = passwordHasher;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
    {
        //validate RegisterRequest data
        
        //gives back every error message associated with invalid model state
        if (!ModelState.IsValid)
        {
            BadRequestModelState();
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
    
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
    {
        if (!ModelState.IsValid)
        {
            return BadRequestModelState();
        }

        var user = await _userService.GetByUsername(loginRequest.Username);
        if (user == null)
        {
            return Unauthorized();
        }

        var isCorrectPassword = _passwordHasher.VerifyPassword(loginRequest.Password, user.PasswordHash);
        if (!isCorrectPassword)
        {
            return Unauthorized();
        }

        var response = await _authenticator.Authenticate(user);

        return Ok(response);
    }
    
    //If the user doesnt provide username and password
    private IActionResult BadRequestModelState()
    {
        var errorMessages = ModelState.Values.SelectMany(v =>
            v.Errors.Select(e => e.ErrorMessage));
        
        return BadRequest(new ErrorResponse(errorMessages));
    }

}