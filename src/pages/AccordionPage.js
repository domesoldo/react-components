import Accordion from "../components/Accordion"

const AccordionPage = () => {
  const items = [
    {
      id: "32214",
      label: "Can I use React on a project?",
      content: "Sure you can!",
    },
    {
      id: "54326",
      label: "Is this Accordion awesome?",
      content: "It is fantastic!",
    },
    {
      id: "875689",
      label: "Is anyone going to reuse this Accordion?",
      content: "Probably not",
    },
  ]

  return <Accordion items={items} />
}

export default AccordionPage
