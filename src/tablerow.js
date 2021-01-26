const TableRow = ({ children, height }) => {
  return (
    <div className="tableClaimsTable__table-row">
      <div className='tableClaimsTable__table-row-content' style={{ height: height }}>
        {children}
      </div>
    </div>
  )
}

export default TableRow
