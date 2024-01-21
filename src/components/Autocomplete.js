import { useState } from "react"
import { Combobox } from "@headlessui/react"
import { GoCheck } from "react-icons/go"

const Autocomplete = ({
  name,
  suggestions = [],
  placeholder,
  onChange,
  onSelect,
  inputRef,
  getOptionLabel,
  getOptionValue,
  defaultValue = "",
  isRequired = false,
  className,
  ...rest
}) => {
  const [selected, setSelected] = useState(null)
  const [inputValue, setInputValue] = useState(defaultValue)

  const handleSelect = (option) => {
    setSelected(option)
    setInputValue(getOptionLabel(option))
    onSelect?.(option)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
    onChange?.(event.target.value)
    if (event.target.value.length === 0) {
      setSelected(null)
      onSelect?.(null)
    }
  }

  return (
    <Combobox value={selected} onChange={handleSelect}>
      <div className="relative">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm">
          <Combobox.Input
            className={`w-full border-none text-gray-900 focus:ring-0 ${className}`}
            ref={inputRef}
            id={name}
            name={name}
            autoComplete="off"
            displayValue={(option) => getOptionLabel(option) ?? inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            value={inputValue}
            type="search"
            {...rest}
          />
        </div>

        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {suggestions.map((suggestion) => (
            <Combobox.Option
              key={getOptionValue(suggestion)}
              value={suggestion}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-6 pr-4 ${
                  active ? "bg-indigo-200 text-white" : "text-gray-900"
                }`
              }>
              {({ selected, active }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}>
                    {getOptionLabel(suggestion)}
                  </span>
                  {selected ? (
                    <span
                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                        active ? "text-white" : "bg-indigo-200"
                      }`}>
                      <GoCheck className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}

export default Autocomplete
