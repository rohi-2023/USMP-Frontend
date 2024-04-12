import React from 'react'

function ServiceCenter() {
  return (
    <React.Fragment>
        <p className='  py-4 text-center text-xl font-semibold '>Make a complain</p>
        <form action="" className=' lg:px-10 xl:px-28'>
          <div>
            <p className=' font-semibold px-4'>Personal Details</p>
            <main className=' flex flex-col gap-5 py-4 px-2'>
              <label htmlFor="">
                <input type="text" placeholder='Full Name' className=' outline-none border-[1px] border-black bg-gray-100 w-full placeholder:font-semibold placeholder:uppercase rounded py-1 px-3' />
              </label>
              <label htmlFor="">
                <input type="email" placeholder='Email' className=' outline-none border-[1px] border-black bg-gray-100 w-full placeholder:font-semibold placeholder:uppercase rounded py-1 px-3' />
              </label>
                <textarea name="" className="outline-none border-[1px] border-black bg-gray-100 w-full placeholder:font-semibold rounded py-1 px-3" placeholder='Write Your Complaint' cols="30" rows="10"></textarea>
              <div className=' flex items-center justify-center'>
                <button className=' w-96 bg-black py-1 text-white font-semibold px-8 rounded'>SEND</button>
              </div>
            </main>
          </div>
        </form>
    </React.Fragment>
  )
}

export default ServiceCenter