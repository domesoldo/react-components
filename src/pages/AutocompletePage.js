import { useState } from "react"
import Autocomplete from "../components/Autocomplete"
import { startsWithIgnoreCase } from "../utils"

const AutocompletePage = () => {
  const [colours, setColours] = useState([
    { name: "Orange", colour: "bg-orange-500" },
    { name: "Red", colour: "bg-red-500" },
    { name: "Yellow", colour: "bg-yellow-500" },
    { name: "Green", colour: "bg-green-500" },
    { name: "Cherry", colour: "bg-red-800" },
  ])
  const [coloursCopy] = useState([...colours])
  const [selected, setSelected] = useState(null)

  const handleChange = (value) => {
    setColours(coloursCopy.filter((s) => startsWithIgnoreCase(s.name, value)))
  }

  const handleSelect = (option) => {
    setSelected(option)
  }

  return (
    <div className="w-96">
      <Autocomplete
        name="colour"
        suggestions={colours}
        placeholder="Type a colour"
        className="px-5 py-3 text-sm leading-5"
        getOptionLabel={(option) => option?.name}
        getOptionValue={(option) => option?.colour}
        onChange={handleChange}
        onSelect={handleSelect}
      />
      {selected && <div className={`mt-4 h-12 w-12 p-3 ${selected?.colour}`} />}
    </div>
  )
}

export default AutocompletePage
