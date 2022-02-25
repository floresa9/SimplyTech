import Image from 'next/image'
import React from 'react'
import User from '../../images/user2.png'

export default function userCard({ x }) {
  return (
    <div className="text-center">
      <Image src={x.img} height={200} width={180} />
      <h1 className="text-xl">{x.name}</h1>
      <h1 className="text-xl" >{x.pos}</h1>
    </div>
  )
}
