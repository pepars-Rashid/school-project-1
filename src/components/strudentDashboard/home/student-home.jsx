import React from 'react'
import Notes from './notes'
import Degrees from './degrees'
import StudentBar from '../Student-bar'

export default function StudentHome() {
  return (
    <>
    <div className='h-full flex flex-col items-center pt-[60px]'>
      <div className='flex flex-col gap-[20px]'>
      <Notes/>
      <Degrees/>

      </div>
        <StudentBar/>
    </div>
    </>
  )
}
