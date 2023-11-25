import React from 'react'
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import './Add.css';
import BASE_URL from '../Service/Base_url';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
// GES10 to access vairable destructre   RES7 then goto down 71
function TableE({ employeesToDisplay, removerEmp }) {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={12} lg={6} xl={12} className=''>
            <h1 className='text-center text-light'><strong>List of <span style={{ color: '#BAFF39' }}>Employees</span></strong></h1>
            <div id='box1' className=' w-75' style={{marginLeft:'12%'}}>
              <table class="table table-hover fs-5 mt-5" >
                <thead className='table-dark'>
                  <tr>
                    <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col">No.</th>
                    <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col">Full E-Name</th>
                    {/* <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col">E-Email</th> */}
                    <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col">Mobile</th>
                    <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col">Status</th>
                    <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col">Profile</th>
                    <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* GES11.1 */}
                  {           /* GES11.2 */
                    employeesToDisplay.length > 0 ? employeesToDisplay.map((i, index) => (
    
                      <tr class="table-Default">
                        {/* GES11.3 */}
                        <th scope="row">{index + 1} </th>
                        <td>{i.fname + " " + i.lname}</td>
                        {/* <td>{i.email}</td> */}
                        <td>{i.mobile}</td>
                        <td>
                          <div style={{ backgroundColor: '#BAFF39', color: 'black', fontWeight: 'bold', borderEndEndRadius: '10px' }} className='text-center p-2 w-75'>
                            {i.status} <i class="fa-solid fa-angle-down fa-bounce ms-2"></i>
                          </div>
                        </td>
                        <td>
                          {/* GEIS2 */}
                          <Image src={`${BASE_URL}/uploads/${i.profile}`} roundedCircle style={{ width: '30px' }} className='ms-3' />
                        </td>
                        <td>
                          <Dropdown as={ButtonGroup}>
                            <Button variant=""><i class="fa-solid fa-ellipsis-vertical fa-beat"></i></Button>
    
                            <Dropdown.Toggle split variant="" id="dropdown-split-basic" />
    
                            <Dropdown.Menu style={{ borderColor: 'black' }}>
    
                              {/* View */}
                              <Dropdown.Item>
                                {/* GSES1 */}
                                <Link to={`/view/${i._id}`} style={{ textDecoration: 'none',color: 'black'  }}>
                                  <i class="fa-regular fa-eye fa-beat-fade me-3"></i>View
                                </Link>
                              </Dropdown.Item>
    
                              {/* View */}
                              <Dropdown.Item>
                                <Link to={`/edit/${i._id}`} style={{ textDecoration: 'none',color: 'black' }}>
                                  <i class="fa-solid fa-scissors fa-shake me-3"></i>Edit
                                </Link>
                              </Dropdown.Item>
                                                    {/* RES8 then goto contextShare.js*/}
                              <Dropdown.Item onClick={()=>removerEmp(i._id)}><i class="fa-solid fa-trash-can fa-bounce me-3"></i>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
    
                      </tr>
                    )) : <p>NO Employees are Present</p>
                  }
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TableE