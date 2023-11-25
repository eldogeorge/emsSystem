import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Add.css';
// import { Link } from 'react-router-dom';
import { registerAPI } from '../Service/allAPI';

// ATS2
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import { registerContext } from '../employeeContext/ContextShare';
function Add() {

  // CS6 to get context then goto home.js 
  const {registerData,setRegisterData}=useContext(registerContext)


  // ACS1 state to hold image data
  const [Image, setImage] = useState("")

  // ATS5 create navigate
  const navigate = useNavigate()

  // ATES2 state to hold error reponse
  const [errorMsg, setErrorMsg] = useState("")


  // ACS7 state to hold all other input datas enter by user
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    status: "",
    location: ""
  })

  // ACS9 funcation to updata userData
  const userDetails = (e) => {
    // ACS11
    // console.log(e.target.value);
    // let value=e.target.value
    // let name=e.target.name
    // after destrut
    let { value, name } = e.target
    // sepated operation
    setUserData({ ...userData, [name]: value })
  }
  // ACS12
  // console.log(userData);

  //ACS3 create a funcation to store image
  const setProfile = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  //ACS4 state to store preview image as URL
  const [preview, setPreview] = useState("")

  // ACS5 to acess when it open
  useEffect(() => {
    if (Image) {
      setPreview(URL.createObjectURL(Image))//file to URL
    }
  }, [Image])

  // console.log(preview);
  //  ACS20
  // 20.1 create a funcation for submit button we need header & body
  const handleSubmit = async (e) => {
    e.preventDefault()

    //20.2 header - contentType:multipart/formData
    const headerConfig = {
      "Content-Type": "multipart/form-data"
    }
    //20.3 body form data
    const data = new FormData()

    //20.4 Access datas from userData using destrut
    const { fname, lname, email, mobile, gender, status, location } = userData

    // ATS4 line no. 120
    if (fname == "") {
      toast.error('First Name Required')
    }
    else if (lname == "") {
      toast.error('Last Name Required')
    }
    else if (email == "") {
      toast.error('Email Required')
    }
    else if (mobile == "") {
      toast.error('Mobile Number Required')
    }
    else if (gender == "") {
      toast.error('Gender Required')
    }
    else if (status == "") {
      toast.error('Employee status Required')
    }
    else if (location == "") {
      toast.error('Employee Location Required')
    }
    else if (Image == "") {
      toast.error('Profile Required')
    }
    else {
      // 20.5 add datas in formdata using methods
      data.append('user_profile', Image)
      data.append('fname', fname)
      data.append('lname', lname)
      data.append('email', email)
      data.append('mobile', mobile)
      data.append('gender', gender)
      data.append('status', status)
      data.append('location', location)

      //20.6 api call
      const response = await registerAPI(headerConfig, data)
      console.log(response);
      if (response.status == 200) {

        // CS7 update context
        setRegisterData(response.data)  // data means newEmployees objects in server

        // alert("Employee Added")
        // ATS7 line no 127
        setUserData({
          ...userData,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          gender: "",
          status: "",
          location: ""
        })

        setImage("")

        // ATS6 red
        navigate("/")



      }
      else {
        // alert("Employee Already ")
        // console.log(response.response.data);
        // ATES3
        setErrorMsg(response.response.data)
      }
    }

  }
  return (
    <div >
      {/* ATES1 */}
      {
       //ATES4  
      errorMsg ? <Alert variant="dark" dismissible onClose={() => setErrorMsg("")}>
        {/* <Button onClose={() => setErrorMsg("")}>Show Alert</Button>; */}
        {errorMsg}
      </Alert> : ""
      }
      <Container>
        <h1 className='text-center text-light'><strong>Register <span style={{ color: '#BAFF39' }}>Employee Details</span></strong></h1>
        <div className='mt-5 m-5 p-5' id='box1' style={{ fontWeight: 'bold' }}>
          <Row>
            <div>
              {/* ACS6 to access the image */}
              <img src={preview ? preview : "https://i.postimg.cc/Mp4NRLKm/profile.jpg"} alt="" style={{ width: '25%', marginLeft: '40%' }} />
            </div>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className='p-5'>
              {/* ACS8 to call funcation*/}
              <FloatingLabel onChange={userDetails} required
                controlId="floatingInput"
                label="First Name"
                className="mb-5 fa w-100"
              >
                {/* ACS10 */}
                <Form.Control name="fname" type="text" placeholder="First Name" />
              </FloatingLabel>
              <FloatingLabel required controlId="floatingPassword" label="Email Address" className='mb-5 fa w-100'>
                {/* ACS13 */}
                <Form.Control onChange={userDetails} name="email" type="email" placeholder="Email" />
              </FloatingLabel>
              <fieldset>
                <Form.Group as={Row} className="mb-5 fa w-100">
                  <Form.Label as="legend" column sm={2}>
                    Gender
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      onChange={userDetails} value={'male'}
                      type="radio"
                      label="Male"
                      name="gender"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      onChange={userDetails} value={'female'}
                      type="radio"
                      label="Female"
                      name="gender"
                      id="formHorizontalRadios2"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Group required controlId="formFile" className="mb-3 fa w-100">
                <Form.Label>Choose Profile Picture</Form.Label>
                {/* ACS2 */}
                <Form.Control onChange={setProfile} type="file" />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className='p-5'>
              <FloatingLabel required
                controlId="floatingInput"
                label="Last Name"
                className="mb-5 fa w-100"
              >
                {/*ACS14  */}
                <Form.Control onChange={userDetails} name="lname" type="text" placeholder="Last Name" />
              </FloatingLabel>
              <FloatingLabel required controlId="floatingMobile" label="Mobile Number" className='mb-5 fa w-100'>
                {/*ACS15  */}
                <Form.Control onChange={userDetails} name="mobile" type="text" placeholder="Mobile" />
              </FloatingLabel>
              <Form.Group required as={Col} controlId="formGridState" className='mb-5 fa w-100'>
                <Form.Label>Select Empolyee Status</Form.Label>
                {/*ACS16 */}
                <Form.Select onChange={userDetails} name="status" defaultValue="Choose...">
                  <option>Select...</option>
                  {/*ACS17  */}
                  <option value={'active'}>Active</option>
                  <option value={'inactive'}>Inactive</option>
                </Form.Select>
              </Form.Group>
              <FloatingLabel required
                controlId="floatingInput"
                label="Enter Employee Location"
                className="mb-5 fa w-100"
              >                  {/*ACS18  */}
                <Form.Control onChange={userDetails} name="location" type="text" placeholder="Emoloyee Location" />
              </FloatingLabel>
            </Col>
          </Row>
          <div className='text-center'>
            {/* <Link to={'/view/1'}> */}
            {/*ACS19  */}
            <Button variant="" onClick={handleSubmit} style={{ backgroundColor: '#BAFF39' }} className='ms-3 w-25' id="button-addon2">
              <i class="fa-regular fa-address-card fa-bounce me-3"></i><span className='fs-4'>Add</span>
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </Container>
      {/* ATS3 */}
      <ToastContainer position="top-center" theme="dark" />
    </div>
  )
}

export default Add