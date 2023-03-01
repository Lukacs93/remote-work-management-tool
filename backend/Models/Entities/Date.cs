﻿using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities
{
    public class Date
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        
        public DateTime CreatedDate { get; set; }

        public DateTime DeadLine { get; set; }

        public DateTime? LatestModification { get; set; }

        public DateTime CompletedOn { get; set; }
    }
}
