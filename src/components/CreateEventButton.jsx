import { PlusCircle } from 'lucide-react'
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {
    const {setShowEventModal} = useContext(GlobalContext)
  return (
    <button onClick={()=> setShowEventModal(true)} className='border p-2 rounded-full flex itema-center shadow-m hover:shadow-lg'>
        <PlusCircle className='text-green-500  w-7 h-7'/>
        <span className='pl-3 pr-5 py-1 '>Create</span>
    </button>
  )
}
