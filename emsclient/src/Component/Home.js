import React, { useContext, useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import TableE from './TableE';
import SpinnerC from './SpinnerC';
import './Add.css'

import { deleteContext, editContext, registerContext } from '../employeeContext/ContextShare';
import { getAllEmployees, toremoveEmployee } from '../Service/allAPI';
function Home() {

  // SSDS1 state to store search data then goto line 80
  const [search, setSearch] = useState("")
  // GES 5 create state to store all employees usestate []bcz res will be array of object
  const [allEmployees, setAllEmployees] = useState([])


  // EEAS4 access from context share.js
  const { editData, setEditData } = useContext(editContext)

  // CS8 to get context & import registerContext also
  const { registerData, setRegisterData } = useContext(registerContext)

  // REAS4 to access context
  const { deleteData, setdeleteData } = useContext(deleteContext)

  // loadingStep2
  // state to handle the spain 
  const [showSpain, setSpain] = useState(false)

  // GES6.1 create funcation to api call to get all employees
  const getEmployees = async () => {
    // SSDS4 then goto allapi.js
    const response = await getAllEmployees(search)
    // GES6.2 goto useEffect to access at loading time
    // console.log(response.data);
    setAllEmployees(response.data)
    

  }
  // GES8 
  console.log(allEmployees);

  // SSDS3 then goto line 33
  console.log(search);

  //RES5 funcation to delete employee then goto down
  const deleteEmployee = async (id) => {
    const { data } = await toremoveEmployee(id)
    // REAS5 then goto line 68
    setdeleteData(data)
    // refresh the table content
    getEmployees()
    // setEditData(data)

  }

  // loadingStep1
  useEffect(() => {
    // GES7 call the funcation
    getEmployees()
    // loadingStep3
    setTimeout(() => {
      setSpain(true)
    }, 2000);
    // SSDS7 then goto server part file logic.js
  }, [search])

  // loadingStep4
  // console.log(showSpain);
  return (
    <div >
      {/* CS9 then goto index.js */}
      {
        registerData ? <Alert variant="success" dismissible className='w-25 container'>
          {registerData.fname} Added Successfully....
        </Alert> : ''
      }
      {/* REAS6 over*/}
      {
        deleteData ? <Alert variant="danger" dismissible className='w-25 container'>
          {deleteData.fname} Delete Successfully....
        </Alert> : ''
      }

      {/* REAS6 over*/}
      {
        editData ? <Alert variant="info" dismissible className='w-25 container'>
          {editData.fname} Edit Successfully....
        </Alert> : ""
      }
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} xl={6} className='mt-5'>
            <FloatingLabel
              // SSDS2  then goto line 42
              onChange={e => setSearch(e.target.value)}
              controlId="floatingInput"
              label="Search Employee Name Here"
              className="mb-4  d-inline-flex" style={{ width: '55%' }}
            >
              <Form.Control type="type" placeholder="Employee Name" />

            </FloatingLabel>
            <Button variant="" style={{ backgroundColor: '#BAFF39' }} className='ms-3 w-25 ' id="button-addon2 btn">
              <i class="fa-solid fa-magnifying-glass fa-fade me-3"></i><span className='fs-4'>Search</span>
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={6} className='mt-5' style={{ textAlign: 'end' }} >
            <Link to={'/add'}>
              <Button variant="" style={{ backgroundColor: '#BAFF39' }} id="button-addon2">
                <i class="fa-solid fa-user-plus fa-shake"></i> Add
              </Button>
            </Link>
          </Col>
        </Row>
        {/* loadingStep5 true:false*/}
        {
          // GES9 then goto tableE.js  RES6 then goto tableE.js
          showSpain ? <TableE employeesToDisplay={allEmployees} removerEmp={deleteEmployee}>  </TableE> : <SpinnerC></SpinnerC>

        }
      </Container>
    </div>
  )
}

export default Home