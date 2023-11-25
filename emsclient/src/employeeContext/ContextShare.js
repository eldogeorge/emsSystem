// CS2 import createContext
import React, { createContext, useState } from 'react'


//CS3 create context object
export const registerContext = createContext()

// REAS1
export const deleteContext = createContext()

// EEAS1
export const editContext = createContext()

// CS1 rfce loadings
function ContextShare({ children }) {
  // CS4 create state for registerContext
  const [registerData, setRegisterData] = useState("")
  // REAS2
  const [deleteData, setdeleteData] = useState("")

  // EEAS2
  const [editData, setEditData] = useState("")
  return (
    <div>
      {/* EEAS3 then goto eit.js */}
      <editContext.Provider value={{ editData, setEditData }}>
        {/* REAS3 till closing tag,then goto home.js (to share) */}
        <deleteContext.Provider value={{ deleteData, setdeleteData }}>
          {/* CS5 till line23*/}
          <registerContext.Provider value={{ registerData, setRegisterData }}>
            {children}
          </registerContext.Provider>
        </deleteContext.Provider>
      </editContext.Provider>
    </div>
  )
}
{/* children call/share registerData & setregisterData */ }

export default ContextShare