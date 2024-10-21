import { StudentProgress } from "@/components/Circular Progress/Student-progress";
import CustomScrollbar from "@/components/scrol";
import StudentDashboard from "@/components/strudentDashboard/student-dashboard";

export default function Home() {
  return (
  <>
  <div className="flex w-screen h-screen justify-center items-center">
      <StudentProgress/>
  </div>
  </>  
  );
}
