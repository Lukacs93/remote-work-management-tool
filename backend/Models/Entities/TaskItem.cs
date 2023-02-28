using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities;

public class TaskItem
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public List<User> UsersOnTask { get; set; }

    public long ProjectId { get; set; } // The Project its part of

    public string Description { get; set; }

    public long DateId { get; set; }

}