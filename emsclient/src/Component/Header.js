import React from 'react'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#383838'}} data-bs-theme="dark">
        <div class="container">
          <a class="navbar-brand" href="/" className='ms-5'><i class="fa-solid fa-database fa-spin" style={{color: 'white'}}></i></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <strong class="nav-link active" href="" className='fs-3 text-light ms-5'>EMS Application
                  <span class="visually-hidden">(current)</span>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header