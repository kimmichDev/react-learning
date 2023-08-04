"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import image from "@/app/assets/logo.jpg"

const page = () => {
  return (
    <>
      {/* <Image src={image} alt='logo' onLoadingComplete={() => console.log("ok par")} /> */}
      <div><Link href={"/blog/hello"}>Slug</Link></div>
    </>
  )
}

export default page