using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities;

public class Project
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public User Manager { get; set; } // The user of the one in charge of the project

    public List<User> UsersInTheProject { get; set; }

    public List<Task> Tasks { get; set; }

    public Date Date { get; set; }



}