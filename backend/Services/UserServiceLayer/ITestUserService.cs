using backend.Models.Entities;

namespace backend.Services.UserServiceLayer;

public interface ITestUserService
{
    Task<TestUser> GetByEmail(string email);
    Task<TestUser> GetByUsername(string username);
    Task<TestUser> Create(TestUser user);

    Task<TestUser> GetById(Guid userId);
}