import { useState } from "react"
import Button from "../components/Button"
import { GoBell, GoDownload, GoAlert } from "react-icons/go"
import { pause } from "../utils"

const ButtonPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    pause(1000)
      .then(() => setIsLoading(false))
      .finally(() => setIsLoading(true))
  }

  const sharedProps = {
    onClick: handleClick,
    loading: isLoading,
    className: "mr-5",
  }

  return (
    <div className="m-4 max-w-4xl">
      <div className="flex flex-row justify-between items-center mb-8">
        <Button primary {...sharedProps}>
          <GoBell />
          Primary
        </Button>
        <Button primary rounded {...sharedProps}>
          <GoBell />
          Primary
        </Button>
        <Button primary rounded outline {...sharedProps}>
          <GoBell />
          Primary
        </Button>
        <Button primary outline {...sharedProps}>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center mb-8">
          <Button secondary {...sharedProps}>
            Secondary
          </Button>
          <Button secondary rounded {...sharedProps}>
            Secondary
          </Button>
          <Button secondary rounded outline {...sharedProps}>
            Secondary
          </Button>
          <Button secondary outline {...sharedProps}>
            Secondary
          </Button>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center mb-8">
          <Button success {...sharedProps}>
            <GoAlert />
            Success
          </Button>
          <Button success rounded {...sharedProps}>
            <GoAlert />
            Success
          </Button>
          <Button success rounded outline {...sharedProps}>
            <GoAlert />
            Success
          </Button>
          <Button success outline {...sharedProps}>
            <GoAlert />
            Success
          </Button>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center mb-8">
          <Button warning {...sharedProps}>
            <GoDownload />
            Warning
          </Button>
          <Button warning rounded {...sharedProps}>
            <GoDownload />
            Warning
          </Button>
          <Button warning rounded outline {...sharedProps}>
            <GoDownload />
            Warning
          </Button>
          <Button warning outline {...sharedProps}>
            <GoDownload />
            Warning
          </Button>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center mb-8">
          <Button danger {...sharedProps}>
            <GoAlert />
            Danger
          </Button>
          <Button danger rounded {...sharedProps}>
            <GoAlert />
            Danger
          </Button>
          <Button danger rounded outline {...sharedProps}>
            <GoAlert />
            Danger
          </Button>
          <Button danger outline {...sharedProps}>
            <GoAlert />
            Danger
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonPage
