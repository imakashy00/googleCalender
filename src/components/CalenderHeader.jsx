import { CalendarClock, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';


export default function CalenderHeader() {
    const {monthIndex,setmonthIndex} = useContext(GlobalContext)
    function handlePrevMonth(){
        setmonthIndex(monthIndex-1)
    }
    function handleNextMonth() {
      setmonthIndex(monthIndex + 1);
    }
    function handleReset(){
        setmonthIndex(
          monthIndex === dayjs().month()
            ? monthIndex + Math.random()
            : dayjs().month()
        );
    }
  return (
    <header className="px-4 py-2 flex items-center">
      {/* <img className="mr-2 w-12 h-12" src={<Calendar />} alt="Logo" /> */}
      <CalendarClock className="text-blue-500 mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">Today</button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <ChevronLeft />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <ChevronRight />
        </span>
      </button>
      <h2 className='ml-4 text-xl text-gray-500 font-bold'>
        {dayjs(new Date(dayjs().year(),monthIndex)).format('MMMM YYYY')}
      </h2>
    </header>
  );
}
