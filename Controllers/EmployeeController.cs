using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
        [HttpGet("[action]")]
        public List<EmpMaster> List(long id)
        {
            return _employeeLogic.list();
        }
        [HttpPost("[action]")]
        public EmpMaster Add(){
            EmpMaster emp;
            using (var reader = new StreamReader(Request.Body))
            {
                var body = reader.ReadToEnd();
                emp = JsonConvert.DeserializeObject<EmpMaster>(body);
            }
            return _employeeLogic.add(emp);
        }
    }
}
