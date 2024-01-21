import SortableTable from "../components/SortableTable"

const TablePage = () => {
  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Colour",
      render: (fruit) => <div className={`m-2 p-3 ${fruit.colour}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score Square",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score,
    },
  ]

  const data = [
    { name: "Orange", colour: "bg-orange-500", score: 3 },
    { name: "Apple", colour: "bg-red-500", score: 5 },
    { name: "Banana", colour: "bg-yellow-500", score: 1 },
    { name: "Lime", colour: "bg-green-500", score: 4 },
    { name: "Cherry", colour: "bg-red-800", score: 2 },
  ]

  const keyFn = (fruit) => {
    return fruit.name
  }

  return <SortableTable data={data} config={config} keyFn={keyFn} />
}

export default TablePage
