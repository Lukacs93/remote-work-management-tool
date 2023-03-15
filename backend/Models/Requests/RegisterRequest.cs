using System.ComponentModel.DataAnnotations;

namespace backend.Models.Requests;

public class RegisterRequest
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    
    [Required]
    public string Username { get; set; }
    [Required]
    // [MinLength(5)]
    public string password { get; set; }
    [Required]
    public string ConfirmPassword { get; set; }
}