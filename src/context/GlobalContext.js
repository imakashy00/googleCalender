import React from 'react'

const GlobalContext = React.createContext({
  monthIndex: 0,
  setmonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: 0,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent:({type,payload})=>{},
});
export default GlobalContext