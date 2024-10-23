
import Calander from '@/components/calander'
import StudentHome from '@/components/strudentDashboard/home/student-home'
import StudentPlanner from '@/components/strudentDashboard/student-planner/student-planner'



export default function page() {
  return (
    <div className='w-screen h-[2000px] flex justify-center bg-gradient-to-br from-[#B3D9FF] to-[#CAE8FA]'>
      <StudentPlanner/>
      {/* <StudentHome/> */}
      
    </div>
  )
}


