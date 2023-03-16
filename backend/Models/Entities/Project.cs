using System.ComponentModel.DataAnnotations.Schema;
using backend.Models.Enums;

namespace backend.Models.Entities;

public class Project
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    public long ManagerId { get; set; } // The user of the one in charge of the project

    public long DateId { get; set; }

    public long UsersOnProject { get; set; }

    public Status? ProjectStatus { get; set; }

    public string Description { get; set; } = "";
}