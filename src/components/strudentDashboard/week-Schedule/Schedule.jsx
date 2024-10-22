import React from 'react'

export default function Schedule() {
  const Schedule = {
    أحد: ["math", "a", "b", "c", "d"], 
    اثنين: ["math", "a", "b", "c", "d"],
    ثلاثاء: ["math", "a", "b", "c", "d"], 
    أربعاء: ["math", "a", "b", "c", "d"],
    خميس: ["math", "a", "b", "c", "d"], 
  }

  const squareStyle = (day, index) =>{
    return index%2==0 ? 
            ((day==='اثنين' || day==='أربعاء') ? 'bg-[#D9D7FE] border-[#B7B0FC]' : 'bg-[#B7B0FC] border-[#D9D7FE]') 
            : 
            (!(day==='اثنين' || day==='أربعاء')? 'bg-[#D9D7FE] border-[#B7B0FC]' : 'bg-[#B7B0FC] border-[#D9D7FE]')
  }
  
  return (
    <div className='w-full h-[220px] flex flex-col gap-[5px]'>
      {Object.keys(Schedule).map(day => (
        <div dir='rtl' key={day} className='flex justify-center gap-[5px] text-[10px]'>
          <h2 className='size-[40px] bg-[#7164FA] flex justify-center items-center rounded-[10px]'>{day}</h2>
          <ul className='flex gap-[5px]'> 
            {Schedule[day].map((subject, index) => (
              <li key={index} 
                className={`${squareStyle(day, index)} 
                size-[40px] flex justify-center items-center rounded-[10px] border-[1px]`}>
                {subject}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
