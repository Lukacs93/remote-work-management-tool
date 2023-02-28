using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public List<Project> CurrentProjects { get; set; }// Those projects that the use is in as a manager or just a user

        public List<TaskItem> Tasks { get; set; }
    }
}
