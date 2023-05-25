import React from 'react'
import Link from "next/link"
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            {/* Not needed unless I want to add around "Talk About Bruno" */}
            {/* <div className='flex items-center'> */}
            <Link href="/" className="underline underline-offset-2">Talk About Bruno</Link>
            {/* </div> */}
            <div>
            <Link href="mailto:b.aguiar428@gmail.com" target="_blank">Say Hi!</Link>
            <span className='text-primary text-2xl pl-1'>&#9825;</span>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer