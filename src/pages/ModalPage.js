import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  )

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here an important message for you to accept</p>
    </Modal>
  )

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  )
}

export default ModalPage
