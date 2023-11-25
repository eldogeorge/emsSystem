//AAS1 import

import BASE_URL from "./Base_url"
import { commonRequest } from "./CommonRequest"

// register
// AAS2
export const registerAPI=async(header,body)=>{//bcz async commonRequest
    return await commonRequest("POST",`${BASE_URL}/employees/register`,body,header)
}

//GES 4 get all employees          becz no file type data 
                                // SSDS5 then goto line16
export const getAllEmployees=async(search)=>{
                                                                        // here body is empety and header will take default apllication/json as empet string
                                                                            // SSDS6 query paremneter  then goto home.js
    return await commonRequest("GET",`${BASE_URL}/employees/getEmployeesDetails?tosearch=${search}`,"")//search=${search}
}

// GSES5 get single employee,then goto view.js
export const getSingleEmployee=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/employees/singleEmployeeDetail/${id}`,"")
}

// RES4  then goto home.js
export const toremoveEmployee=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/employees/toRemoveEmployee/${id}`,{})
}

// SD4 update employee then goto edit.js
export const editEmployee=async(id,header,body)=>{
    return await commonRequest("PUT",`${BASE_URL}/employees/updateEmployee/${id}`,body, header)
}