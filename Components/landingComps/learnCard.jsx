import Image from 'next/image'
import React from 'react'
import Fade from 'react-reveal/Fade'

export default function learnCard({ x }) {
  return (
    <Fade up>
      <div className="w-full  rounded border border-gray-400 p-10">
        <Image src={x.img} width={90} height={90} />
        <h1 class=" mt-5 w-full text-3xl font-bold ">{x.title}</h1>
        <p class="mt-2 text-justify text-xl ">{x.p1}</p>
        <p class="mt-2 text-justify text-xl ">{x.p2}</p>
        <p class="mt-2 text-justify text-xl ">{x.p3}</p>
      </div>
    </Fade>
  )
}
