import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"

const DefaultLayout = () => {
  return (
    <div className="flex bg-gray-200">
      <Sidebar />

      <div className="flex-1">
        <div className="m-7 bg-indigo-200 p-6">
          <div className="text-4xl font-medium text-gray-800">
            Good morning 👋
          </div>
          <div className="mt-4">
            These are the UI components developed so far
          </div>
        </div>

        <div className="m-7 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
