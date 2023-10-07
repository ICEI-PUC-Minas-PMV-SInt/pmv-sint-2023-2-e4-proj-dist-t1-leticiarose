﻿using ItCollabora.Models;

namespace ItCollabora.Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<List<UserModel>> GetAll();
        Task<List<UserModel>> GetOne(Guid userId);
        Task DeleteOne(Guid userId);
        Task<UserModel> CreateOne(UserModel user);
        Task<UserModel> Modify(UserModel updatedUser, Guid userId );

    }
}
