import React, { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1)
    } else {
      setExpandedIndex(nextIndex)
    }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    )

    return (
      <div key={item.id}>
        <button
          onClick={() => handleClick(index)}
          className="flex w-full items-center justify-between border-b bg-gray-300 p-3">
          {item.label}
          {icon}
        </button>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })

  return <div className="rounded border-x border-t">{renderedItems}</div>
}

export default Accordion
