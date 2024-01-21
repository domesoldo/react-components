import { useEffect, useRef, useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import Panel from "./Panel"

const Dropdown = ({ options, value, onChange, className, rest }) => {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return
      }
      // close dropdown when user clicks outside the component
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("click", handler, true)

    return () => {
      document.removeEventListener("click", handler)
    }
  }, [])

  const icon = (
    <span>
      {isOpen ? (
        <GoChevronDown className="text-lg" />
      ) : (
        <GoChevronLeft className="text-lg" />
      )}
    </span>
  )

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onChange(option)
  }

  const renderOptions = options.map((option) => {
    return (
      <button
        key={option.value}
        onClick={() => handleOptionClick(option)}
        className="flex w-full rounded py-0.5 hover:bg-sky-100">
        {option.label}
      </button>
    )
  })

  return (
    <div ref={divEl} className={`${className} relative`} {...rest}>
      <Panel>
        <button
          onClick={handleClick}
          className="flex w-full items-center justify-between">
          {value?.label || "Select..."}
          {icon}
        </button>
      </Panel>
      {isOpen && <Panel className="absolute z-10">{renderOptions}</Panel>}
    </div>
  )
}

export default Dropdown
