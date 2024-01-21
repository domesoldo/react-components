import { GoArrowDown, GoArrowUp } from "react-icons/go"
import useSort from "../hooks/useSort"
import Table from "./Table"

const SortableTable = (props) => {
  const { config, data } = props
  const { sortedData, sortBy, sortOrder, setSortColumn } = useSort(data, config)

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowUp />
          <GoArrowDown />
        </div>
      )
    }

    if (sortOrder === null) {
      return (
        <div>
          <GoArrowUp />
          <GoArrowDown />
        </div>
      )
    } else if (sortOrder === "asc") {
      return <GoArrowUp />
    } else if (sortOrder === "desc") {
      return <GoArrowDown />
    }
  }

  const updatedProps = config.map((column) => {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column,
      header: () => (
        <th
          onClick={() => setSortColumn(column.label)}
          className="cursor-pointer hover:bg-gray-100">
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    }
  })

  return <Table {...props} data={sortedData} config={updatedProps} />
}

export default SortableTable
