namespace backend.Models.Entities;

public class TestUser
{
    public Guid id { get; set; }
    public string Email { get; set; }
    public string Username { get; set; }
    public string PasswordHash { get; set; }
}