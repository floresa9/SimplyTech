import Image from 'next/image'
import React from 'react'

export default function blogCard({ x }) {
  return (
    <div className=" w-full  ">
      <div>
        <Image src={x.img} alt="pix" width={500} height={320} />
      </div>
      <p className="mt-1 text-xl ">{x.title}</p>
    </div>
  )
}
