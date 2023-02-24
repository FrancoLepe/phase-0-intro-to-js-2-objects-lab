
const employee ={
    name: "sam",
   streetAddress: "1234 main",
}

function updateEmployeeWithKeyAndValue(employee,key,value){
   return {...employee,[key]:value}  
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key]=value
   return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee}
    delete newEmployee [key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  const deleteFromEmployee={...employee}
  delete employee[key]
  return employee
}

//const employee ={
//    name:"Franco",
//    streetAddress:"4717 lauriefrost ct",
//}
// function updateEmployeeWithKeyAndValue(employee, key, value){
// const updateEmployee={...employee,[key]:value};
// return updateEmployee;
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key]= value
//     return employee
// }
// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
// }
// function deleteFromEmployeeByKey(employee, key){
// const deleteFromEmployee={...employee};
// delete deleteFromEmployee[key];
// return deleteFromEmployee
// }