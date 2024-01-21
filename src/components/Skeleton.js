import classNames from "classnames"

// className to allow to add hight and width of the outer div
const Skeleton = ({ times, className }) => {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  )
  // inset-0 make it to expand
  const innerClassNames = classNames(
    "absolute",
    "animate-shimmer",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  )

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          {/* div that animate */}
          <div className={innerClassNames} />
        </div>
      )
    })

  return boxes
}

export default Skeleton
