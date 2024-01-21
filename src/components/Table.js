import { Fragment } from "react"

const Table = ({ data, config, keyFn }) => {
  const renderHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>
    }
    return <th key={column.label}>{column.label}</th>
  })

  const renderRows = data.map((rowData) => {
    const renderCells = config.map((column) => {
      return (
        <td key={column.label} className="p-2">
          {column.render(rowData)}
        </td>
      )
    })

    return (
      <tr key={keyFn(rowData)} className="border-b-2">
        {renderCells}
      </tr>
    )
  })

  return (
    <table className="w-full table-auto border-spacing-2">
      <thead>
        <tr>{renderHeaders}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  )
}

export default Table
