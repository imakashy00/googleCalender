import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./utils";
import CalenderHeader from "./components/CalenderHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./context/GlobalContext";
import EventModel from "./components/EventModel";

function App() {
  const [currentMonth, setcurrentMonth] = useState(getMonth());
  const { monthIndex,showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setcurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  // console.table(getMonth())

  return (
    <React.Fragment>
      {showEventModal && <EventModel />}
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
