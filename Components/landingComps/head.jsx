import React from 'react'
import Fade from 'react-reveal/Fade'
import bannerbg from '../../images/banner-bg.png'

export default function head() {
  return (
    <div class="grid justify-center gap-6 p-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
      <div class="mt-10">
        <h1 class=" w-full text-5xl font-bold text-white ">
          <Fade top delay={50}>
            Welcome to SimplyTech
          </Fade>
        </h1>

        <p class="mt-10 text-justify text-xl text-white">
          <Fade top delay={100}>
            Be a part of a global community of millions of investors and
            hobbyist at the forefront of technology and finance. We help
            consumers understand how and why this new technology is changing the
            world.
          </Fade>
        </p>

        <button
          class="mt-8 rounded  p-2  text-white hover:bg-blue-700 "
          style={{ backgroundColor: '#DB2777' }}
        >
          Get Started
        </button>
      </div>

      <div>
        {/* <h1 class="w-full text-5xl font-bold text-white">
          Welcome to We Are SimplyTech
        </h1> */}
      </div>
    </div>
  )
}
