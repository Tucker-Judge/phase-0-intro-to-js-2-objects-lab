const employee = {name: "Avoir La Flemme", streetAddress: "Grave"}
function updateEmployeeWithKeyAndValue(employee,key, value){
    const deRien = {...employee}
    deRien[key] = value
    return deRien
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const mauvaisMeuf = {...employee}
    delete mauvaisMeuf[key]
    return mauvaisMeuf
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}