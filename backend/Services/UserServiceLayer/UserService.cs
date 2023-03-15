﻿using backend.Data;
using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Services.UserServiceLayer
{
    public class UserService : IUserService
    {
        private readonly RemotivateContext _context;

        public UserService(RemotivateContext context)
        {
            _context = context;
        }
        public async Task<User> CreateUser(long userId, User user)
        {
            _context.Users.Add(user);

            await _context.SaveChangesAsync();

            return await _context.Users
                .Where(p => p.Id == user.Id)
                .Include(p => p.CurrentProjects)
                .Include(p => p.Tasks)
                .FirstOrDefaultAsync() ?? throw new InvalidOperationException();
        }

        public async Task<User> DeleteUser(long id)
        {
            throw new NotImplementedException();
        }
        public async Task<List<User>> GetAllUsers()
        {
            // return await _context.Users.Include(u => u.CurrentProjects)
            //     .Include(u => u.Tasks)
            //     .ToListAsync();
            return await _context.Users.ToListAsync();
        }

        public async Task<User?> GetUserById(long id)
        {
            return await _context.Users.FirstOrDefaultAsync(t => t.Id == id);          
        }

        public async Task<User> UpdateUser(User user)
        {
            throw new NotImplementedException();
        }
        
        
        
        
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
}
