import {Link} from 'react-router-dom'
import React from 'react'
const ErrorPage = ()=>{
  return (
    <div>
      this is a broken link  Please go back to the home page
      <Link to ="/" >Go back to home page</Link>
    </div>
  )
}

export default ErrorPage