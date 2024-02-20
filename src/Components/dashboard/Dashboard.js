"use client"

import Link from 'next/link';
import React from 'react';
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoMusicalNoteOutline,IoSettingsOutline } from "react-icons/io5";
import {   TiHome} from 'react-icons/ti';
import '/src/Components/dashboard/FontStyle.css'
const Dashboard = () => {

    const style={
        hight:"70px",  
        width: "70px",
        top: "7px",
        left: "637px",
        border: "1px"
        

    }
    const style2={
        width:" 40px",
       top:" 537px",
        left:" 674px",
        border:" 1px",

    }

   
    return (
        <div className='flex mt-4'>
        <div className='w-64 min-h-screen text-white  bg-[#3B3B3B]'>
            <ul className='menu p-4'>
                <>
                    <li>
                        <Link href='/' className='flex items-center'>
                            <IoMusicalNoteOutline className='text-2xl font-bold mr-2' /> {/* Add margin-right to create space */}
                            <span className="ml-2 fontStyle">Fauget</span> {/* Add margin-left to create space */}
                        </Link>
                    </li>
                    <li className='mt-4 mb-4'>
                        <Link href='/' className='flex items-center'>
                           <span>Menu</span>
                            <span style={style} className="ml-4 text-white">
                                <hr></hr>
                                </span>
                        </Link>
                    </li>

                   
                    <li className='mt-4 mb-4'>
                        <Link href='/user-home' className='flex items-center'>
                            <TiHome className='text-2xl font-bold mr-2' />
                            <span className="ml-2">Home</span>
                        </Link>
                    </li>
                    <li className='mt-4 mb-4'>
                        <Link href='/add-review' className='flex items-center'>
                        <IoMusicalNoteOutline className='text-2xl font-bold mr-2' /> 
                            <span className="ml-2">Podcast</span>
                        </Link>
                    </li>
                    <li className='mt-4 mb-4'>
                        <Link href='/my-booking' className='flex items-center'>
                            <IoSettingsOutline className='text-2xl text-white font-bold mr-2' />
                            <span className="ml-2">Settings</span>
                        </Link>
                    </li>
                </>
            </ul>

            <ul className='menu p-4'>
                <>
                <li className='mt-4 mb-4'>
                        <Link href='/' className='flex items-center'>
                           <span>My Playlist</span>
                            <span style={style2} className="ml-4 text-white">
                                <hr></hr>
                                </span>
                        </Link>
                    </li>
                <li className='mt-4 mb-4'>
                        <Link href='/' className='flex items-center'>
                            <MdOutlineQueueMusic className='text-2xl font-bold mr-2' /> {/* Add margin-right to create space */}
                            <span className="ml-2">Playlist #A</span> {/* Add margin-left to create space */}
                        </Link>
                    </li>
                <li className='mt-4 mb-4'>
                        <Link href='/' className='flex items-center'>
                            <MdOutlineQueueMusic className='text-2xl font-bold mr-2' /> 
                            <span className="ml-2">Playlist #B</span> 
                        </Link>
                    </li>
                <li className='mt-4 mb-4'>
                        <Link href='/' className='flex items-center'>
                            <MdOutlineQueueMusic className='text-2xl font-bold mr-2' /> 
                            <span className="ml-2">Playlist #C</span> 
                        </Link>
                    </li>
                <li className='mt-4 mb-4'>
                        <Link href='/' className='flex items-center'>
                            <MdOutlineQueueMusic className='text-2xl font-bold mr-2' /> 
                            <span className="ml-2">Add New +</span> 
                        </Link>
                    </li>
               
                
                </>
            </ul>
        </div>
        <div>
         <div>
            <h1 className='text-xl '>Welcome to fauget music services</h1>
         </div>
        </div>
    </div>
    );
};

export default Dashboard;