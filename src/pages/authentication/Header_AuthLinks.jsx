
import { NavLink } from 'react-router-dom'

function Header_AuthLinks() {
  return (
    <div className=' py-4 flex items-center justify-evenly font-bold'>
        <NavLink  className={" uppercase sm:text-xl auth"} to={"login"}>Login</NavLink>
        <NavLink className={" uppercase sm:text-xl auth"} to={"signup"}>Sign Up</NavLink>
    </div>
  )
}

export default Header_AuthLinks