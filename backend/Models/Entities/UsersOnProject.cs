using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities
{
    public class UsersOnProject
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public long UserId { get; set; }
    }
}