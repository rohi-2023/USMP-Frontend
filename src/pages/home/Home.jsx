import React, { Suspense } from 'react'
import HomePageProducts from './HomePageProducts'
import Slider from "../../Components/Sliders"
import HomePageIcons from './HomePageIcons'
import Steps from './Steps'

function Home() {
  return (
    <React.Fragment>
        <main>
          <header>
            <p className=' text-center font-semibold  text-xl bg-black text-white  pb-3 sm:hidden'>Available Products</p>
          </header>
          <section>
            <Slider/>
          </section>
          <section>
            <HomePageIcons/>
          </section>
          <section>
            <Suspense fallback={<p>loading...</p>}>
              <HomePageProducts/>
            </Suspense>
          </section>
          <section>
            <Steps/>
          </section>
        </main>
    </React.Fragment>
  )
}

export default Home