using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities;

public class Task
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public List<User> UsersOnTask { get; set; }

    public Project Project { get; set; } // The Project its part of

    public string Description { get; set; }

    public Date Date { get; set; }

}