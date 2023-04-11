import React from 'react'
import { Link } from 'react-router-dom'


function test() {
    console.log('Oh yeah')
  return (
    
    <Link to={`/`}>
        <div>this is test</div>
    </Link>
  )
}

export default test