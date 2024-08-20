import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import GlobalContext from '../context/GlobalContext'



export default function SmallCalender() {
    const [currentMonthIndex,setcurrentMonthIndex]  = useState(dayjs().month())
    const [currentMonth,setcurrentMonth] = useState(getMonth())
    const { monthIndex, setSmallCalendarMonth,daySelected,setDaySelected } = useContext(GlobalContext);
    useEffect(()=>{
        setcurrentMonthIndex(monthIndex)
    },[monthIndex])
    useEffect(() => {
      setcurrentMonth(getMonth(currentMonthIndex));
    }, [currentMonthIndex]);
    function handlePrevMonth(){
        setcurrentMonthIndex(currentMonthIndex-1)
    }
    function handleNextMonth() {
      setcurrentMonthIndex(currentMonthIndex - 1);
    }
    function getDay(day){
        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format)
        const currday = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        if (nowDay == currday){
            return "bg-blue-600 rounded-full text-white"
        }
        else if (currday === slcDay){
            return 'bg-blue-100 rounded-full text-blue-600 font-bold'
        }
        else{
            return "";
        }
    }
  return (
    <div className="mt-5">
      <header className=" flex justify-between">
        <p className="text-gray-500 font-bold items-center flex ">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div className="w-1/3 flex justify-between">
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
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                onClick={() => {
                    setSmallCalendarMonth(currentMonthIndex)
                    setDaySelected(day)
                }}
                key={idx}
                className={`py-1 w-full ${getDay(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
