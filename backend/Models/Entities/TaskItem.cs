using System.ComponentModel.DataAnnotations.Schema;
using backend.Models.Enums;

namespace backend.Models.Entities;

public class TaskItem
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public long DateId { get; set; }

    public long ProjectId { get; set; } // The Project its part of
    
    public List<User>? UsersOnTask { get; set; }
    
    public string Description { get; set; }

    public string Note { get; set; }

    public Status? TaskStatus { get; set; }
}