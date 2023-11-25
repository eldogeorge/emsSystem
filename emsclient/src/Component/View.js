import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Add.css'
import { Link, useParams } from 'react-router-dom';
import { getSingleEmployee } from '../Service/allAPI';
import BASE_URL from '../Service/Base_url';

function View() {
  // GSES6
  const params = useParams().id
  // const {id}=useParams()
  // console.log(params);
  // GSES8
  const [singleEmployee,setsingleEmployee]=useState({})

  // GSES9
  const SingleEmployeesDetail=async()=>{
    // const reponse=await getSingleEmployees(params)
    // console.log(reponse.data); OR
    const {data}=await getSingleEmployee(params)
    setsingleEmployee(data)
  }
  // GSES11
  console.log(singleEmployee);
  // GSES7
  useEffect(()=>{
    // GSES10
    SingleEmployeesDetail()
  },[])
  // const Employees
  // const singleEmployee=
  return (
    <Container>

      <Row>
        <Col>
          {
          singleEmployee?
          <Card className='container' style={{ backgroundColor: '#6E6E6E', fontWeight: 'bold', width: '40%' }} id='box1'>
          <Image variant="top" src={`${BASE_URL}/uploads/${singleEmployee.profile}`} roundedCircle style={{ width: '50%', borderRadius: '100%', marginLeft: '25%' }} className='text-center p-3' />
          <Card.Body>
            <Card.Title><h1 className='text-center' style={{ fontWeight: 'bolder', color: '#BCFD4C' }}>{singleEmployee.fname+" "+singleEmployee.lname}</h1></Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
          <ListGroup className="list-group-flush ms-5 mb-4" style={{ border: 'none', }} >
            <ListGroup.Item style={{ backgroundColor: '#6E6E6E', border: 'none', color: 'white' }}><strong style={{ color: '#BAFF39' }} className='me-3'>Email Id:</strong>{singleEmployee.email}</ListGroup.Item>
            <ListGroup.Item style={{ border: 'none', backgroundColor: '#6E6E6E', color: 'white' }}><strong style={{ color: '#BAFF39' }} className='me-3'>Phone Number:</strong> {singleEmployee.mobile}</ListGroup.Item>
            <ListGroup.Item style={{ border: 'none', backgroundColor: '#6E6E6E', color: 'white' }}><strong style={{ color: '#BAFF39' }} className='me-3'>Gender:</strong>{singleEmployee.gender}</ListGroup.Item>
            <ListGroup.Item style={{ border: 'none', backgroundColor: '#6E6E6E', color: 'white' }}><strong style={{ color: '#BAFF39' }} className='me-3'>Status:</strong>{singleEmployee.status}</ListGroup.Item>
            <ListGroup.Item style={{ border: 'none', backgroundColor: '#6E6E6E', color: 'white' }}><strong style={{ color: '#BAFF39' }} className='me-3'>Location:</strong>{singleEmployee.location}</ListGroup.Item>
          </ListGroup>
          {/* <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body> */}
        </Card>:
        <p>Employee Not Found </p>
          }
     
          <div className='text-center mt-3'>
           <Link to={'/'}>
              <Button variant="" style={{ backgroundColor: '#BAFF39' }} className='ms-3 w-25' id="button-addon2">
              <span className='fs-4'>Back</span><i class="fa-solid fa-house fa-bounce ms-3"></i>
              </Button>
           </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default View