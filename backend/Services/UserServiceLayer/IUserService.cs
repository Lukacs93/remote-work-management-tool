using backend.Models.Entities;

namespace backend.Services.UserServiceLayer
{
    public interface IUserService
    {
        Task<List<User>> GetAllUsers();
        Task<User?> GetUserById(long id);
        Task<User> CreateUser(long userId, User user);
        Task<User> UpdateUser(User user);
        Task<User> DeleteUser(long id);
        
        Task<TestUser> GetByEmail(string email);
        Task<TestUser> GetByUsername(string username);
        Task<TestUser> Create(TestUser user);

        Task<TestUser> GetById(Guid userId);
    }
}
