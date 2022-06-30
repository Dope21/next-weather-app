import { SearchIcon } from '@heroicons/react/solid'
import { useRef } from 'react'

export default function SearchBar({ location }) {

  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputRef.current.value === '') return  
    location(inputRef.current.value)
    e.target.reset()
  }

  return (
    <form 
      className="flex gap-2 items-center justify-between w-full bg-white rounded h-[50px] px-6"
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <label htmlFor="location" className="hidden">location</label>
        <input 
          type="text" 
          name="location" 
          placeholder="Search city name..." 
          className="w-full outline-none"
          ref={inputRef}
          />
      </div>
      <button type="submit">
        <SearchIcon className='w-5 text-slate-400' />
      </button>
    </form>
  )
}