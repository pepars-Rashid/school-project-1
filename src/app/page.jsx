import CustomScrollbar from "@/components/scrol";
import StudentDashboard from "@/components/student-dashboard";

export default function Home() {
  return (
  <>
  <div className="flex w-screen h-screen justify-center items-center">
    <CustomScrollbar>
      <div className="size-[400px] bg-slate-600"></div>
    </CustomScrollbar>
  </div>
  </>  
  );
}
