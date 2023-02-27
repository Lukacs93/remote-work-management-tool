using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities;

public class Task
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
}