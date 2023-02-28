using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities;

public class Project
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public long ManagerId { get; set; } // The user of the one in charge of the project

    public List<User> UsersInTheProject { get; set; }

    public List<TaskItem> Tasks { get; set; }

    public long DateId { get; set; }



}