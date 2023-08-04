import Link from 'next/link'
import Head from './head'
const page = () => {
    return (
        <>
            <title>D lo yaw</title>
            <Link href={"/"} className='font-sans font-bold text-blue-600'>
                Home
            </Link>
            <div>Blog index page</div>
        </>
    )
}

export default page