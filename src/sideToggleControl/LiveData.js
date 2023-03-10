import React, { useEffect, useState } from 'react'

import {BiWater} from "react-icons/bi";
import {GiFactory} from "react-icons/gi";

import { useDispatch, useSelector } from 'react-redux';
import { LivePollutionDataAsyncGETThunk, WaterDataAsyncGETThunk } from './LiveDataSlice';


export const LiveData = () => {
  const dispatch=useDispatch()
  const data= useSelector(state=>state.live.pollution)
  const data2= useSelector(state=>state.live.water)
  const status2=useSelector(state=>state.live.status)
  useEffect(()=>{
    if (status2 === "idle") {
        dispatch(LivePollutionDataAsyncGETThunk())
        dispatch(WaterDataAsyncGETThunk())
    }}
      ,[dispatch,status2])
  return (
    <div >
       <div className='flex justify-evenly text-xs py-2'>
         <div  className='hover:bg-gray-100 px-10 py-2 w-full'>Pollution <BiWater /></div>
         <div  className='hover:bg-gray-100 px-10 py-2 w-full'>Water Level< GiFactory/>
           </div>
       </div>
       {data[0]?.results &&data2[0]?.results?<><Water data2={data2[0].results}></Water>
        <Pollution data={data[0].results}></Pollution></>:''}
        
    </div>
  )
}
export const Pollution = ({data}) => {
  return (<div>
    <center className='text-[12px] py-4'>Pollution Live Data</center>
    <div className="flex flex-col mt-0">
    <div className="">
      <div className="py-0 inline-block min-w-full ">
        <div className="overflow-hidden bg-white">
            <div className="bg-gray-100 border-b">
            <div className="w-full bg-white border-b transition duration-300 ease-in-out  flex justify-evenly">
                <div className="font-bold text-[11px] text-black font-light px-6 py-4 ">
                  ID
                </div>
                
                <div className="font-bold text-[11px] text-bold text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Station
                </div>
                
                <div className="font-bold text-[11px] text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Nepali Name
                </div>
                
                <div className="font-bold text-[11px] text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Data Source
                </div>
                
              </div>
            </div>
            
             {data.map((instance)=>{
  
              return ( 
                <div className=' border-b-2 border-gray-300 hover:bg-gray-100'>
              <div className="pl-3 w-full  transition duration-300 ease-in-out bg-white flex justify-evenly ">
                <div className="text-[12px] text-gray-900 font-light px-8 py-4 whitespace-nowrap">
                  {instance.id} 
                </div>
  
                <div className="text-[12px] text-gray-900 font-light px-10 py-4 whitespace-nowra">
                  {instance.name} Station
                </div>
  
                <div className="text-[12px] text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                  {instance.nepaliName?instance.nepaliName:'............'}
                </div>
                
                <div className="text-[12px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {instance.dataSource}
                </div>
                
                
              </div>
  
  
                <div className='pl-12 py-2 text-[12px] text-red-400 bg-white '>
                   {instance.description}
                </div>
                <div className='px-9 pt-3 text-[10px] text-gray-400 bg-gray-100 flex justify-end  mb-2  bg-white'>
                   {instance.modifiedOn}
                </div>
                
              </div>
              )
  
             })}  
          
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}


export const Water = ({data2}) => {
  return (
    <div><center className='text-[12px] pb-1'>River Live Data</center>
    <div className="flex flex-col mt-0">
    <div className="">
      <div className="py-0 inline-block min-w-full ">
        <div className="overflow-hidden bg-white">
            <div className="bg-gray-100 border-b">
            <div className="w-full bg-white border-b transition duration-300 ease-in-out  flex justify-evenly">
                <div className="font-bold text-[11px] text-black font-light px-6 py-4 ">
                  ID
                </div>
                
                <div className="font-bold text-[11px] text-bold text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Station at
                </div>
                
                <div className="font-bold text-[11px] text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Warning Level
                </div>
                
                <div className="font-bold text-[11px] text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Danger Level
                </div>
                
              </div>
            </div>
            
             {data2.map((instance)=>{
  
              return ( 
                <div className=' border-b-2 border-gray-300 hover:bg-gray-100 '>
              <div className="w-full   transition duration-300 ease-in-out bg-white flex justify-evenly pl-4 ">
                <div className="text-[12px] text-gray-900 font-light px-1 py-4 whitespace-nowrap ">
                  {instance.id} 
                </div>
  
                <div className="text-[12px] text-gray-900 font-light pl-7 py-4 whitespace-nowra">
                  {instance.title} 
                </div>
  
                <div className="text-[12px] text-gray-900 font-light px-2 py-4 whitespace-nowrap pl-10 pr-10">
                  {instance.warningLevel?instance.warningLevel:'............'}
                </div>
                
                <div className="text-[12px] text-gray-900 font-light px-2 py-4 whitespace-nowrap pl-10 pr-10">
                  {instance.dangerLevel}
                </div>
                
                
              </div>
  
  
                <div className='pl-12 py-2 text-[12px] text-red-400 bg-white '>
                   {instance.status}
                </div>
                <div className='px-9 py-3 text-[10px] text-gray-400 bg-gray-100 flex justify-end pb-2 mb-2 bg-white'>
                   {instance.modifiedOn}
                </div>
                
              </div>
              )
  
             })}
          
        </div>
      </div>
    </div>
  </div></div>
  )
}
