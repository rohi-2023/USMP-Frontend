import React, { useState } from 'react'
import Cul_stores from './Cul_stores'
import { Context } from './context/Context'


function App() {

  const [displayNavigation,setDisplayNavigation] = useState(false)
  const value={displayNavigation,setDisplayNavigation}
  return (
    <React.Fragment>
      <Context.Provider value={value}>
        <Cul_stores/>
      </Context.Provider>
    </React.Fragment>
  )
}

export default App