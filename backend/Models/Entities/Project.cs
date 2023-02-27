using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities;

public class Project
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
}