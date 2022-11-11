import React from 'react'

const Header = ({text}) => {
  return (
    <header>
        <div>
            <h1 style={{color:'white',fontSize:'3em'}}>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps={
  text : 'Feedback UI',
}


export default Header
