import Image from 'next/image'
import React from 'react'
import UserPic from '../../images/user.png'

export default function teamCard({ x }) {
  return (
    <div className="flex">
      <div style={{ width: '140px', height: '140px' }}>
        <Image src={x.img} alt="pix" />
      </div>
      <div className="ml-5">
        <p className=" text-xl font-bold ">{x.title}</p>
        <p className="mt-2 text-lg  ">{x.des}</p>
      </div>
    </div>
  )
}
