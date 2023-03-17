using backend.Models.Entities;
using backend.Services.DateServiceLayer;
using backend.Services.ProjectServiceLayer;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController, Route("/dates")]
    public class DateController : ControllerBase
    {
        private readonly IDateService _dateService;

        public DateController(IDateService dateService)
        {
            _dateService = dateService;
        }

        [HttpGet("{id}")]
        public async Task<Date> GetDateById(long id)
        {
            return await _dateService.GetDateById(id);
        }
    }
}
