import React from 'react'
import { faq } from '../../StaticData/faqArray'

function Faqs() {
  return (
    <React.Fragment>
      <div className=' py-2  px-2 md:px-8 md:py-5 '>
        <header className='rounded-md   flex flex-col gap-3 px-3 py-5 bg-black text-white'>
          <h1 className=' font-semibold text-2xl text-center underline'>What is USMP?</h1>
          <article className=' font-medium'>
            USMP is an abbreviation for University Student Market Place. This is an E-Commeerce platform which connects university students with the purpose of buying and selling of commodities. 
          </article>
        </header>
        <main className=' px-3 flex pt-10 pb-4 flex-col gap-4'>
          {
            faq.map((eachFaq)=>{
              return(
                <details className='font-semibold border-[1px] px-2 py-1 border-black list-none ' key={eachFaq.id}>
                  <summary>{eachFaq.question}</summary>
                  <p className=' px-8 text-sm text-gray-700'>{eachFaq.answer}</p>
                </details>
              )
            })
          }
        </main>
      </div>
    </React.Fragment>
  )
}

export default Faqs