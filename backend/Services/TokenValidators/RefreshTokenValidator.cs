using System.IdentityModel.Tokens.Jwt;
using System.Text;
using backend.Models;
using Microsoft.IdentityModel.Tokens;

namespace backend.Services.TokenValidators;

public class RefreshTokenValidator
{
    private readonly AuthenticationConfiguration _configuration;

    public RefreshTokenValidator(AuthenticationConfiguration configuration)
    {
        _configuration = configuration;
    }

   
}