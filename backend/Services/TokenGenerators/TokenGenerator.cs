﻿using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace backend.Services.TokenGenerators;

public class TokenGenerator
{
    public string GenerateToken(string secretKey, string issuer, string audience, 
        double expirationMinutes, IEnumerable<Claim> claims = null)
    {
        SecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer,
            audience,
            claims,
            DateTime.UtcNow,
            DateTime.UtcNow.AddMinutes(expirationMinutes),
            credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}