import { NavLink } from "react-router-dom"
import socials1 from "../../image/icons/footerIcons/tik-tok.png"
import socials2 from "../../image/icons/footerIcons/twitter.png"
import socials3 from "../../image/icons/footerIcons/facebook.png"
import socials4 from "../../image/icons/footerIcons/instagram.png"


function Footer() {
  return (
    <div className="px-3 py-3 bg-black text-white max-sm:gap-5 flex max-sm:justify-start max-sm:flex-col justify-around">
      <div className=''>
        <h1 className=" pt-2 font-bold text-2xl">UMSP</h1>
        <section className="text-[12px] sm:text-base  py-3 px-2 font-semibold ">
          <NavLink to={"/faq"}><p>FAQ&apos;s</p></NavLink>
          <NavLink to={"/services"}><p>Service-Center</p></NavLink>
          <NavLink to={"/contact"}><p>Contact-Us</p></NavLink>
          <NavLink to={"/about"}><p>About</p></NavLink>
          <p><a href="mailto:a.samuelsamson@gmail.com">Chat With Us</a></p>
        </section>
      </div>
      <section className=" flex flex-col gap-3  max-sm:justify-start max-sm:items-start  justify-center items-center">
        <h1 className=" font-semibold text-sm sm:text-lg md:text-xl">Get in Touch</h1>
        <p className=" text-sm sm:text-lg md:text-xl">For any enquiry contact us via our <br /> <strong>E-mail</strong>:- usmpmarket1@gmail.com</p>
        <main className=" text-sm sm:text-lg md:text-xl flex gap-4">
          <img  className={` w-6 `} src={socials3} alt="" />
          <img  className={` w-6 `} src={socials4} alt="" />
          <img  className={` w-6 `} src={socials1} alt="" />
          <img className=" w-6 bg-white rounded-[62px] border-2" src={socials2} alt="" />
        </main>
      </section>
    </div>
  )
}

export default Footer


// Faqs SERVICE-CENTER Contact-us Blog  chat-with-us
//  grid sm:grid-cols-3 md:flex md:items-center md:justify-evenly grid-cols-2 gap-3 md:gap-8 sm:px-3 uppercase font-semibold