import StudentDashboard from '@/components/student-dashboard'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-br from-[#B3D9FF] to-[#CAE8FA]'>
      <StudentDashboard/>
    </div>
  )
}
