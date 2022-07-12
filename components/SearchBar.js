import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'
import { citiesList } from '../utils/citiesList'

export default function SearchBar({ location }) {
  const inputRef = useRef()
  const [list, setList] = useState([])
  const [clearBtn, setClearBtn] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (inputRef.current.value === '') return
    location(inputRef.current.value)
    e.target.reset()
  }

  const handleSearch = e => {
    const input = e.target.value
    let matches = []

    if (input.length > 0) {
      matches = citiesList.filter(city => {
        const result = new RegExp(`^${input}`, 'gi')
        return city.match(result)
      })
    }
    setList(list => (list = matches))
  }

  const handleSelect = text => {
    inputRef.current.value = text
    inputRef.current.focus()
    setList([])
  }

  const handleClear = () => {
    inputRef.current.value = ''
    setClearBtn(false)
    setList([])
  }

  const inputBlur = () => {
    if (inputRef.current.value === '') {
      setClearBtn(false)
    }
    setTimeout(() => {
      setList([])
    }, 100)
  }

  const inputFocus = () => {
    setClearBtn(true)
  }

  return (
    <form
      className="relative flex gap-2 items-center justify-between w-full bg-white rounded h-[50px] px-6"
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <label htmlFor="location" className="hidden">
          location
        </label>
        <input
          type="text"
          name="location"
          placeholder="Search city name..."
          className="w-full outline-none"
          ref={inputRef}
          onFocus={inputFocus}
          onBlur={inputBlur}
          onChange={handleSearch}
          autoComplete="off"
        />
      </div>
      {clearBtn ? (
        <button type="button" onClick={handleClear}>
          <XIcon className="w-5 text-slate-400" />
        </button>
      ) : (
        <button type="submit">
          <SearchIcon className="w-5 text-slate-400" />
        </button>
      )}

      {list.length !== 0 && (
        <div className="absolute top-14 rounded left-0 w-full bg-inherit z-30 p-2">
          <ul>
            {list.map((city, i) => (
              <li
                className="py-2 px-4 cursor-pointer hover:bg-gray-300 rounded-sm"
                key={i}
                onClick={() => handleSelect(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  )
}
