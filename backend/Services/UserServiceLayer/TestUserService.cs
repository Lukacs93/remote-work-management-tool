using backend.Models.Entities;

namespace backend.Services.UserServiceLayer;

public class TestUserService : ITestUserService
{
    private readonly List<TestUser> _users = new();
    public Task<TestUser> Create(TestUser user)
    {
        user.id = Guid.NewGuid();
        _users.Add(user);

        return Task.FromResult(user);
    }
        
    public Task<TestUser> GetByEmail(string email)
    {
        return Task.FromResult(_users.FirstOrDefault(u => u.Email == email));
    }

    public Task<TestUser> GetByUsername(string username)
    {
        return Task.FromResult(_users.FirstOrDefault(u => u.Username == username));
    }
        
    public Task<TestUser> GetById(Guid userId)
    {
        return Task.FromResult(_users.FirstOrDefault(u => u.id == userId));
    }
}