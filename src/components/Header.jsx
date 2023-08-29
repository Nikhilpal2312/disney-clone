import React, { useState } from 'react';
import logo from "/images/logo-d-plus.svg";
import {GoHomeFill} from "react-icons/go";
import {BiSearch, BiDotsVerticalRounded} from "react-icons/bi";
import {FiPlus} from "react-icons/fi";
import {BsFillLaptopFill} from "react-icons/bs";
import {AiFillStar,AiFillPlayCircle} from "react-icons/ai";
import HeaderItem from './HeaderItem';
const Header = () => {

    const [toggle, setToggle]= useState(false)

const menu=[
    {
        id:1,
        name:"HOME",
        icon:GoHomeFill,
    },
    {
        id:2,
        name:"SEARCH",
        icon:BiSearch,
    },
    {
        id:3,
        name:"WATCH LIST",
        icon:FiPlus,
    },
    {   id:4,
        name:"ORIGINALS",
        icon:AiFillStar,
    },
    {
        id:5,
        name:"MOVIES",
        icon:AiFillPlayCircle,
    },
    {   id:6,
        name:"SERIES",
        icon:BsFillLaptopFill,
    },
]

  return (
    <div className='flex items-center  justify-between p-4 '>
       <div className='flex items-center gap-8'>
       <img src={logo} alt="Disney+ Hotstar" className='w-[80px] object-cover md:max-w-[115px]'/>
       
       <div className='hidden md:flex gap-8'>
       {
            menu.map((item)=>(
                <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>
            ))
        }
       </div>
       <div className='md:hidden flex gap-5 '>
       {
            menu.map((item, index)=>index<3&&(
                <HeaderItem key={item.id} name={""} Icon={item.icon}/>
            ))
        }
        <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={""} Icon={BiDotsVerticalRounded}/>
           {toggle ? <div className='absolute bg-[#121212] border-[1px] py-3 px-1 mt-3 '>
            {
            menu.map((item, index)=>index>2&&(
                <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>
            ))
        }
            </div>:null}
       </div>
       </div>
       </div>
      <img src='/images/man.png' alt='user' className='w-[40px]'/>
    </div>
  )
}

export default Header;
