import className from "classnames"
import { Link as LinkRouter } from "react-router-dom"
import { GoSync } from "react-icons/go"
import { twMerge } from "tailwind-merge"

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  to,
  loading,
  onClick,
  ...rest
}) => {
  const classes = twMerge(
    className(
      rest.className,
      "flex items-center min-h-12 py-2.5 px-4 border font-bold hover:bg-opacity-90",
      {
        "border-blue-500 bg-blue-500 text-white duration-300": primary,
        "border-gray-800 text-gray-800 bg-white transition duration-300":
          secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-500 bg-yellow-500 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-600": outline && secondary,
        "text-green-600": outline && success,
        "text-yellow-500": outline && warning,
        "text-red-500": outline && danger,
        "bg-opacity-10": loading,
      }
    )
  )

  if (onClick) {
    rest.onClick = onClick
  }

  return to ? (
    <LinkRouter {...rest} className={classes} to={to}>
      {children}
    </LinkRouter>
  ) : (
    <button {...rest} disabled={loading} className={`${classes}`}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger)

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      )
    }
  },
}

export default Button
