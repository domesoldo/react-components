import React from "react"

function Card(props) {
  const {
    title,
    desc,
    img = "https://via.placeholder.com/300x200",
    to,
    onClick,
  } = props

  const handleClick = () => {
    if (to) {
      window.open(to, "_blank")
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      className="cursor-pointer overflow-hidden bg-white"
      onClick={handleClick}>
      <img src={img} alt={title} className="w-full object-cover" />
      <hr className="border-silver my-8 opacity-30" />
      <div className="flex flex-col px-4">
        <p className="card-title mb-2">{title}</p>
        <p className="text-silver-600">{desc}</p>
      </div>
    </div>
  )
}

export default Card
