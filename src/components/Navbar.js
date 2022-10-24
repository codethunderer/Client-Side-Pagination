import {Link,useLocation} from 'react-router-dom'
import React from 'react'

const Navbar = ()=>{
  const {pathname} = useLocation()
  return (
    <nav>
     {
       pathname !== '/users' && (
        <Link to ="/users" >See list of Users</Link>
       )
     }
    </nav>
  )
}

export default Navbar