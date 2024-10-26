
import Calander from '@/components/calander'
import DashboardCon from '@/components/DashboardCon'
import StudentHome from '@/components/strudentDashboard/home/student-home'
import StudentDashboard from '@/components/strudentDashboard/student-dashboard'
import StudentPlanner from '@/components/strudentDashboard/student-planner/student-planner'

export default function page() {
  return (
    <div className='w-screen h-[2000px] flex justify-center bg-gradient-to-br from-[#B3D9FF] to-[#CAE8FA]'>
      <StudentDashboard/>
      {/* <StudentPlanner/> */}
      {/* <StudentHome/> */}
      {/* <DashboardCon/> */}
    </div>
  )
}


