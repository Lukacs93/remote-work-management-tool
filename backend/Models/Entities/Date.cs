namespace backend.Models.Entities
{
    public class Date
    {
        public DateTime CreatedDate { get; set; }

        public DateTime DeadLine { get; set; }

        public DateTime? LatestModification { get; set; }

        public DateTime CompletedOn { get; set; }


    }
}
