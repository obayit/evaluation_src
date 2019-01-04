using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using src.Model;
using src.BusinessLogic;

namespace src.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private EmployeeLogic _employeeLogic;
        public EmployeeController(EmployeeLogic employeeLogic){
            _employeeLogic = employeeLogic;
        }
        [HttpGet("[action]")]
        public EmpMaster Read(long id)
        {
            return _employeeLogic.read(id);
        }
    }
}
