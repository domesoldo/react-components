import { useEffect } from "react"
import ReactDOM from "react-dom"

const Modal = ({ children, actionBar, onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden")

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [])

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-x-4 top-36 bg-white p-4 md:inset-x-40 md:p-10">
        <div className="flex h-full flex-col justify-center">{children}</div>
        <div className="mt-5 flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  )
}

export default Modal
