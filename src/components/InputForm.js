import { useState } from "react"

const InputForm = ({ placeholder, onSubmit }) => {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (event) => {
    if (onSubmit) {
      onSubmit(event)

      setInputValue("")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="px-2 pb-2 md:px-4 md:pb-4">
      <div className="md:text-md flex items-center rounded-full border bg-white px-2 py-2 text-sm md:px-4">
        <input
          type="text"
          name="message"
          id="message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 appearance-none bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="focus:shadow-outline ml-1 rounded bg-blue-500 px-1 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none md:ml-4 md:px-4 md:py-2">
          Send
        </button>
      </div>
    </form>
  )
}

export default InputForm
