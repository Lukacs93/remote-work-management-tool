﻿namespace backend.Models;

public class RefreshToken
{
    public Guid Id { get; set; }
    public string Token { get; set; }
    public Guid UserId { get; set; }
}