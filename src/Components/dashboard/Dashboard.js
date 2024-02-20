
"use client";

import Link from 'next/link';
import React from 'react';
import { IoMusicalNoteOutline, IoSettingsOutline } from "react-icons/io5";
import { LuMusic2 } from "react-icons/lu";
import { TiHome } from 'react-icons/ti';
import { MdOutlineQueueMusic } from "react-icons/md";
import '/src/Components/dashboard/FontStyle.css';
import Box from '@/Box/BoxComponents/Box';

const Dashboard = () => {

    const style = {
        hight: "70px",
        width: "70px",
        top: "7px",
        left: "637px",
        border: "1px"


    }
    const style2 = {
        width: " 40px",
        top: " 537px",
        left: " 674px",
        border: " 1px",

    }

    const navItems1 = [
        {
            route: "Home",
            pathName: "/",
            icon: <TiHome className='text-2xl font-bold mr-2' />
        },
        {
            route: "Podcast",
            pathName: "/podcast",
            icon: <IoMusicalNoteOutline className='text-2xl font-bold mr-2' />
        },
        {
            route: "Settings",
            pathName: "/settings",
            icon: <IoSettingsOutline className='text-2xl text-white font-bold mr-2' />
        },




    ]

    const navItems2 = [

        {
            route: "Playlist #A",
            pathName: "/playlist-a",
            icon: <MdOutlineQueueMusic className='text-2xl font-bold mr-2' />
        },
        {
            route: "Playlist #B",
            pathName: "/playlist-b",
            icon: <MdOutlineQueueMusic className='text-2xl font-bold mr-2' />
        },
        {
            route: "Playlist #C",
            pathName: "/playlist-c",
            icon: <MdOutlineQueueMusic className='text-2xl font-bold mr-2' />
        },
        {
            route: "Add New +",
            pathName: "/add-new",
            icon: <MdOutlineQueueMusic className='text-2xl font-bold mr-2' />
        },

    ]

    return (
        <div >
           <div className='grid md:grid-flow-row lg:grid-flow-col p-2'>
           <div className='w-64 min-h-screen text-white  bg-[#3B3B3B]'>
                <ul className='menu p-4'>
                    <>
                        <li className='flex items-center'>

                            <LuMusic2 className='text-2xl text-white ' />
                            <span className="ml-2 fontStyle">Fauget</span>

                        </li>
                        <li className='mt-4 mb-4'>
                            <Link href='/' className='flex items-center'>
                                <span>Menu</span>
                                <span style={style} className="ml-4 text-white">
                                    <hr></hr>
                                </span>
                            </Link>
                        </li>

                        {navItems1.map((item, index) => (
                            <li key={index} className='mt-4 mb-4'>
                                <Link href={item.pathName} className='flex items-center'>
                                    {item.icon}
                                    <span className="ml-2">{item.route}</span>
                                </Link>
                            </li>
                        ))}


                    </>

                </ul>
                <ul className='menu p-4 mt-4'>
                 <>
                 <li className='mt-4 mb-4'>
                            <Link href='/' className='flex items-center'>
                                <span>My Playlist</span>
                                <span style={style} className="ml-4 text-white">
                                    <hr></hr>
                                </span>
                            </Link>
                        </li>

                        {navItems2.map((item, index) => (
                            <li key={index} className='mt-4 mb-4'>
                                <Link href={item.pathName} className='flex items-center'>
                                    {item.icon}
                                    <span className="ml-2">{item.route}</span>
                                </Link>
                            </li>
                        ))}
                    </>
                </ul>
            </div>
            <div className='text-white'>
                <div className=' flex mt-4 justify-between text-center'>
                <div>
                    <h1 className=' '>Welcome to fauget music services</h1>
                </div>
                <div className='flex gap-4'>
                    <button className='btn btn-outline btn-secondary'>Sing In</button>
                    <button className='btn btn-outline btn-secondary'>Sing Up</button>
                </div>
                </div>
                <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                <Box></Box>
                </div>
               
            </div>
           </div>
            
        </div>
    );
};

export default Dashboard;
