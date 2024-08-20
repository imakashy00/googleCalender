import { AlignRight, Clock, Equal, X } from "lucide-react";
import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import axios from "axios";

export default function EventModel() {
  const { setShowEventModal, daySelected } =
    useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activeTab, setActiveTab] = useState("task");
  const [taskTime, setTaskTime] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const calenderEvent = {
      activeTab,
      title,
      description,
      time: taskTime
        ? taskTime
        : { startime: eventStartTime, endtime: eventEndTime },
    };
    console.log(calenderEvent);
    setShowEventModal(false);
    const url = "http://localhost:8000/tasks"; // Ensure the endpoint matches your FastAPI route

    axios
      .post(url, calenderEvent)
      .then((response) => {
        console.log("Success:", response.data);
        setShowEventModal(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center relative">
          <span className="text-gray-400">
            <Equal />
          </span>

          <div className="relative w-48">
            <div
              className={`absolute inset-0 w-1/2 bg-blue-500 rounded-md transition-transform duration-100 ${
                activeTab === "task"
                  ? "transform translate-x-0"
                  : "transform translate-x-full"
              }`}
            />

            <div className="flex relative z-10">
              <button
                onClick={() => setActiveTab("task")}
                className={`flex-1 px-4 py-2 text-center ${
                  activeTab === "task" ? "text-white" : "text-gray-700"
                } transition-colors duration-300`}
              >
                Task
              </button>
              <button
                onClick={() => setActiveTab("event")}
                className={`flex-1 px-4 py-2 text-center ${
                  activeTab === "event" ? "text-white" : "text-gray-700"
                } transition-colors duration-300`}
              >
                Event
              </button>
            </div>
          </div>

          <button onClick={() => setShowEventModal(false)}>
            <span className="text-gray-400">
              <X className="hover:bg-gray-200 hover:rounded-full" />
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="flex flex-col justify-between gap-y-7 gap-x-4">
            <div className="flex">
              <div className="w-1/5 flex"></div>
              <input
                type="text"
                required
                name="title"
                placeholder="Add Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-4/5 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div className="flex">
              <span className="text-gray-400 w-1/5">
                <Clock />
              </span>
              <p className="w-4/5 ">{daySelected.format(`dddd, MMMM DD`)}</p>
            </div>
            <div className="flex w-4/5  ">
              <div className="w-1/5"></div>
              {activeTab === "task" ? (
                <div className="flex pl-3">
                  <span className="mx-2 text-lg">At:</span>
                  <input
                    type="time"
                    value={taskTime}
                    required
                    onChange={(e) => setTaskTime(e.target.value)}
                    className="p-1 border ml-4 rounded-md focus:outline-none"
                  />
                </div>
              ) : (
                <div className="flex pl-3 w-4/5">
                  <span className="mx-2 text-lg">From:</span>
                  <input
                    type="time"
                    value={eventStartTime}
                    onChange={(e) => setEventStartTime(e.target.value)}
                    className="p-1 border rounded-md focus:outline-none"
                  />
                  <span className="mx-2 text-lg">To:</span>
                  <input
                    type="time"
                    value={eventEndTime}
                    onChange={(e) => setEventEndTime(e.target.value)}
                    className="p-1 border rounded-md focus:outline-none"
                  />
                </div>
              )}
            </div>
            <div className="flex">
              <span className="w-1/5 text-gray-400">
                <AlignRight />
              </span>
              <input
                type="text"
                required
                name="description"
                placeholder="Add Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="pt-3 border-0 text-gray-600 pb-2 w-4/5 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 "
              />
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded  "
          >
            Add
          </button>
        </footer>
      </form>
    </div>
  );
}
