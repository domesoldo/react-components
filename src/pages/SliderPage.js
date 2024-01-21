import { useState } from "react"
import Slider from "../components/Slider"

const SliderPage = () => {
  const [age, setAge] = useState(50)

  const handleAgeChange = (newAge) => {
    setAge(newAge)
  }

  return <Slider value={age} onChange={handleAgeChange} />
}

export default SliderPage
