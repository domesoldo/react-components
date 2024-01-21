import Link from "./Link"

const Sidebar = () => {
  const links = [
    { label: "Buttons", path: "/button" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Autocomplete", path: "/autocomplete" },
    { label: "Slider", path: "/slider" },
    { label: "Skeleton", path: "/skeleton" },
  ]

  return (
    <div className="h-screen w-64 bg-indigo-900">
      <div className="bg-inidigo-800 p-5 text-xl font-bold uppercase text-gray-200">
        Website Template
      </div>
      <div>
        <div className="p-5 text-xs font-bold uppercase text-gray-200">
          UI Components
        </div>
        <nav>
          <ul>
            {links?.map((link) => (
              <li className="m-5 flex items-center" key={link.label}>
                <Link
                  primary
                  to={link.path}
                  className="mx-3 text-sm text-gray-200"
                  activeClassName="underline pl-3">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
