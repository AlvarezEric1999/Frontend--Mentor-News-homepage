import classNames from 'classnames';
import icono from '../assets/images/icon-menu.svg'
import iconoClose from '../assets/images/icon-menu-close.svg'
import { useState } from 'react'

export const Navbar = ()=>{
    const [active ,setActive] = useState(false)

    const menu = classNames( )



    const handleToggle = (e) => {
        e.preventDefault()
        setActive(!active)

        console.log(active)
    }

    return (

 <>
    <ul className={`absolute sm:static w-[255px] z-10  flex  flex-col justify-center items-start bg-OffWhite right-0 top-0 bottom-0 sm:flex', 
    sm:flex-row sm:text-[16px] font-inter sm:w-[438px] sm:place-content-around sm:items-center  transition ease-in-out duration-1000 ${active ?'':' hidden'} `} >
 
        <li className='hover:text-SoftOrange pl-4 pb-4 ' onClick={handleToggle}  > <a href="">Home</a> </li>
        <li className='hover:text-SoftOrange pl-4 pb-4 '  onClick={handleToggle}  > <a href="">New</a> </li>
        <li className='hover:text-SoftOrange pl-4 pb-4 ' onClick={handleToggle}   > <a href="">Popular</a></li>
        <li className='hover:text-SoftOrange pl-4 pb-4 ' onClick={handleToggle}   > <a href="">Trending</a></li>
        <li className='hover:text-SoftOrange pl-4 pb-4 ' onClick={handleToggle}   > <a href="">Categories</a></li>
        <li className='absolute top-0 right-0 pt-8 pr-4 sm:hidden cursor-pointer' onClick={handleToggle} ><img src={iconoClose} ></img></li>
    </ul>
        <img className=' w-10 h-4  cursor-pointer sm:hidden ' onClick={handleToggle} src={icono} />

</>
    )


}