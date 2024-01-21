import { useState } from "react"
import Dropdown from "../components/Dropdown"

const DropdownPage = () => {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  }

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    { label: "Blue", value: "blue" },
    { label: "Yellow", value: "yellow" },
  ]

  return (
    <div>
      <Dropdown
        label="Primary"
        options={options}
        value={selection}
        onChange={handleSelect}
      />

      {selection && (
        <div
          className="mt-24 p-8 w-24"
          style={{ backgroundColor: selection.value }}
        />
      )}
    </div>
  )
}

export default DropdownPage
