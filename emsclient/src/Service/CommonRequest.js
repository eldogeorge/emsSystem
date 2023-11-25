// creating a common structure for all API requests
// CAS2
import axios from "axios"

// CAS1 line21 then goto allAPI.js

export const commonRequest = async (method, url, body, header) => {//await not use bcz of return
    let config = {
        method,
        url,
        headers: header ? header : "application/json",
        data: body
    }
    return axios(config).then(response => {
        console.log(response);
        return response
    }).catch(err => {
        console.log(err);
        return err
    })
}





// file type
// body - from data - header  Content-Type:multipart/formData

// no file type data in api
// body - from data - header  application/json