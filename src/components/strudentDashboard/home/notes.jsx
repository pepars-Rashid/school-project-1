import Background from "../background";

export default function Notes() {
  return (
    <div className='relative pt-[65px] flex flex-col items-center w-[340px] h-[425px] bg-[#6255FA] rounded-[25px]'>
      {/* left-1/2 transform -translate-x-1/2 */}
        <div className='absolute -top-[10px] size-[75px] bg-[#B1D4FE] rounded-[25px] border-[2px] border-[#ffffff]'>
          
        </div>
        <p className='text-[24px] font-semibold text-white'>
          طارق صابوني
        </p>
        <p className='text-[12px] text-white'>
          الصف السابع 
        </p>

        <div className='z-10 flex h-[38px] w-full mt-[50px] gap-[5px] px-[5px]'>
          <div dir='rtl' className='flex gap-[5px] items-center px-[10px] h-full w-full bg-white rounded-[10px]'>
            <div className='size-[28px] bg-slate-400 rounded-[5px]'></div> {/*the img*/}
            <p>واجبات</p>
          </div>
          <div dir='rtl' className='flex gap-[5px] items-center px-[10px] h-full w-full bg-white rounded-[10px]'>
            <div className='size-[28px] bg-slate-400 rounded-[5px]'></div> {/*the img*/}
            <p>ملاحظات</p>       
          </div>    
          <div dir='rtl' className='flex gap-[5px] items-center px-[10px] h-full w-full bg-white rounded-[10px]'>
            <div className='size-[28px] bg-slate-400 rounded-[5px]'></div> {/*the img*/}
            <p>إعلانات</p>
          </div>
        </div>

        <div className='relative pt-[24px] pb-[10px] px-[10px] flex flex-col items-center w-[340px] h-[195px] bg-[#07193B] mt-[24px] rounded-[25px]'>
          <div className='absolute -top-[14px] size-[28px] bg-slate-400 rounded-[5px]'></div>
          
          <div dir='rtl' className='flex flex-wrap gap-[5px] w-full overflow-y-scroll custom-scrollbar'>
            <div  className='flex items-center h-[50px] w-full bg-[#112243] rounded-[15px] text-white'>أسئلة درس النباتات صفحة 43.</div>
            <div  className='flex items-center h-[50px] w-full bg-[#112243] rounded-[15px]  text-white'></div>
            <div  className='flex items-center h-[50px] w-full bg-[#112243] rounded-[15px]  text-white'></div>
            <div  className='flex items-center h-[50px] w-full bg-[#112243] rounded-[15px]  text-white'></div>
          </div>
        </div>
        
        {/* <Background/> */}

    </div>
  )
}
