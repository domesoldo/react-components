import classNames from "classnames"
import { Link as LinkRouter, useLocation } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const Link = ({
  primary,
  secondary,
  to,
  children,
  activeClassName,
  ...rest
}) => {
  const location = useLocation()
  const classes = twMerge(
    classNames(
      rest.className,
      "inline-block",
      { "text-white hover:underline": primary },
      { "text-gray-800 hover:underline": secondary },
      location.pathname === to && activeClassName
    )
  )

  return (
    <LinkRouter {...rest} to={to} className={classes}>
      {children}
    </LinkRouter>
  )
}

Link.propTypes = {
  checkVariationValue: ({ primary, secondary }) => {
    const count = Number(!!primary) + Number(!!secondary)

    if (count > 1) {
      return new Error("Only one of primary, secondary can be true")
    }
  },
}

export default Link
