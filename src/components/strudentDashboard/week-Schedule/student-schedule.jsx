import React from 'react'
import Background from '../background'
import Schedule from './Schedule'
import StudentBar from '../Student-bar'

export default function StudentSchedule() {
  return (
    <div className='flex flex-col items-center gap-[10px]'>

      <div className='flex flex-col justify-between w-[360px] h-[220px] bg-[#6255FA] rounded-b-[25px] p-[25px]'>
        <div className='size-[50px] bg-[#B1D4FE] border-[2px] rounded-[15px]'></div>
        <p dir='rtl' className='text-[24px] font-semibold text-white'>جدول الدوام</p>
      </div>

      <div className='w-[340px] h-[310px] bg-white rounded-[10px] p-[15px]'>
        <p dir='rtl' className='text-[24px] font-semibold'>برنامج الأسبوع</p>
        <div className='h-[2px] w-full bg-[#BDBEBF] mt-[10px] mb-[15px]'/>
        <Schedule/>
      </div>
      <StudentBar/>

    </div>
  )
}
