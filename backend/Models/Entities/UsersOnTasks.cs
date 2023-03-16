using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities
{
    public class UsersOnTasks
    {
        public UsersOnTasks(long taskItemId, long userId)
        {
            TaskItemId = taskItemId;
            UserId = userId;
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public long TaskItemId {get;set;}

        public long UserId { get; set; }
    }


}