import React, { useEffect, useState } from 'react'
import { universities } from '../../StaticData/splitStringForSchools'
import axios from "axios"

function Sign_up() {
  const url = `https://usmp-api.onrender.com/api/v1/seller/signup/?format=json`
// If Fields are Empty Triggers State Change
  const [isEmptyField, setIsEmptyField] = useState(false)
  // All UserInput Fields
  const [inputField, setInputField] = useState({
    userName:'',phoneNumber:'',email:'',password:'',confirmPassword:''
  })
  // User Select Option
  const [selectOption, setSelectOption] = useState({identity:"Buyer",university:'Select'})
  // Destructuring userInput 
  const {userName,phoneNumber,email,password,confirmPassword}=inputField
 
  // FUNCTIONS 

  // Timer Function
  useEffect(function(){
    const timeOut = setTimeout(function(){
      setIsEmptyField(false)
    },4000)

    return function(){
      clearTimeout(timeOut)
    }
  })
    

  // Selection Functions
  const handleSelectOption = function(e){
    e.preventDefault()
    setSelectOption(function(prev){
      return({...prev,identity:e.target.value})
    })
    console.log(selectOption);
  }
  const handleSelectUniversity = function(e){
    e.preventDefault()
    setSelectOption(function(prev){
      return({...prev,university:e.target.value})
    })
  }

  // USER INPUT FUNCTION
  const handleInput = function(e){
    e.preventDefault()
    setInputField(function(prev){
      return({
        ...prev,
        [e.target.name]:e.target.value
      })
    })
  
  }


// SUBMIT FORM 

  const handleSubmit = async function(e){
    e.preventDefault()
    // if(navigator.onLine){
    //   if(userName==="" || phoneNumber==="" || email==="" || password==="" || confirmPassword===""){
    //     console.log("Empty Fields"); 
    //   }else{
    //     alert("Post Data")
    //   }
    // }else{
    //   alert("Currently offLine")
    // }
    if(userName==="" || phoneNumber==="" || email==="" || password==="" || confirmPassword==="" || selectOption.university==="Select"){
      setIsEmptyField(true)
    }else{
      alert("Posting Data")
      const user_data = {...inputField,...selectOption};
      try{
        const response = await axios.post(url,user_data)
        // console.log(response.data);
      }catch(error){
        console.log(error.response);
      }
    }
  }


  return (
    <React.Fragment>
        <div className=' flex flex-col  px-8'>
            <form action="" className=' lg:px-14   py-5 flex flex-col gap-5'>
              <label htmlFor="" className='  md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,4fr] '>
                <p className={` hidden md:block md:font-semibold sm:uppercase`}>Username</p>
                <input type="text" onChange={handleInput} value={inputField.userName} name="userName" className={` border-[1px] px-2 py-1 w-full rounded-2xl md:bg-gray-100 md:placeholder:text-transparent ${isEmptyField&&userName.length===0?'border-red-400':'border-black'}  outline-none `} placeholder='user name'/>
              </label>
              <label htmlFor="" className='  md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,4fr] items-center'>
                <p className={` hidden md:block md:font-semibold sm:uppercase`}>Phone number</p>
                <input type={"tel"} onChange={handleInput} value={inputField.phoneNumber} name="phoneNumber" className={` border-[1px] px-2 py-1 w-full rounded-2xl md:bg-gray-100 md:placeholder:text-transparent ${isEmptyField&&phoneNumber.length===0?'border-red-400':'border-black'}  outline-none `} placeholder='phone number'/>
              </label>
              <label htmlFor="" className='  md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,4fr] items-center'>
                <p className={` hidden md:block md:font-semibold sm:uppercase`}>Email</p>
                <input type="email" onChange={handleInput} value={inputField.email} name="email" className={` border-[1px] px-2 py-1 w-full rounded-2xl md:bg-gray-100 md:placeholder:text-transparent ${isEmptyField&&email.length===0?'border-red-400':'border-black'}  outline-none `} placeholder='email'/>
              </label>
              <label htmlFor="" className='  md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,4fr] items-center'>
                <p className={` hidden md:block md:font-semibold sm:uppercase`}>Password</p>
                <input type={"password"} onChange={handleInput} value={inputField.password} name="password" className={` border-[1px] px-2 py-1 w-full rounded-2xl md:bg-gray-100 md:placeholder:text-transparent ${isEmptyField&&password.length===0?'border-red-400':'border-black'}  outline-none `} placeholder='password'/>
              </label>
              <label htmlFor="" className='  md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,4fr] items-center'>
                <p className={` hidden md:block md:font-semibold sm:uppercase`}>Confirm Password</p>
                <input type={"password"} onChange={handleInput} value={inputField.confirmPassword} name="confirmPassword" className={` border-[1px] px-2 py-1 w-full rounded-2xl md:bg-gray-100 md:placeholder:text-transparent ${isEmptyField&&confirmPassword.length===0?'border-red-400':'border-black'}  outline-none `} placeholder='confirm password'/>
              </label>
                <select value={selectOption.identity} onChange={handleSelectOption} className={` outline-none border-[1px] py-1 px-1 border-black  rounded-md w-full`} name="" >
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>
                <select value={selectOption.university} onChange={handleSelectUniversity}  className={` outline-none border-[1px] py-1 px-1 border-black  rounded-md w-full ${isEmptyField&&selectOption.university==="Select"?'border-red-400':'border-black'}`} name="" >
                  <option value="Select">Select a University</option>
                  {
                    universities.map(function(eachUniversity,index){
                      return(
                        <option value={eachUniversity} key={index}>{eachUniversity}</option>
                      )
                    })
                  }
                </select>
                <p className=' outline-none text-center capitalize text-[10px]'>By signing up you have agreed to our <br /><span className=' font-bold'>terms and policy</span></p>
                <button onClick={handleSubmit} type="submit" className=' w-full bg-black text-white px-3 py-1 md:py-2 md:mx-5 md:font-bold uppercase font-semibold rounded-full'>Create Account</button>
            </form>
        </div>
        
    </React.Fragment>
  )
}

export default Sign_up