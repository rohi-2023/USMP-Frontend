import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <div className='  text-[12px] text-white bg-black py-5 px-3 grid grid-cols-2 gap-3 text- uppercase font-semibold'>
      <NavLink to={"/faq"}><p>FAQ&apos;s</p></NavLink>
      <p>Service-Center</p>
      <NavLink to={"/contact"}><p>Contact-Us</p></NavLink>
      <NavLink to={"/about"}><p>About</p></NavLink>
      <p><a href="mailto:a.samuelsamson@gmail.com">Chat With Us</a></p>
    </div>
  )
}

export default Footer


// Faqs SERVICE-CENTER Contact-us Blog  chat-with-us