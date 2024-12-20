import { useMemo, useState } from "react"
import { useFinancialRecord } from "../../contexts/financial-record-context"
import { useTable, Column, CellProps, Row } from "react-table"

const EditableCell = ({value: initialValue, row, column, updateRecord, editable}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(initialValue)

    const onBlur = () => {
        setIsEditing(false)
        updateRecord(row.index, column.id, value)
    }
    return (
        <div onClick={() => editable && setIsEditing(true)} style={{cursor: editable ? "pointer" : "default"}}>
            { isEditing ? 
                <input value={value} onChange={(e) => setValue(e.target.value)} autoFocus style={{width: "100%"}} onBlur={onBlur} /> 
                : typeof value === "string" 
                ? (value) 
                : (value.toString())
            }
        </div>
    )
}

export const FinancialRecordList = () => {
    const { records } = useFinancialRecord()

    const columns = useMemo (() => [
        {
            Header: "Description",
            accessor: "description",
            Cell: (props) => (
                <EditableCell {...props} updateRecord={() => null} editable={true} />
            )
        },
        {
            Header: "Amount",
            accessor: "amount",
            Cell: (props) => (
                <EditableCell {...props} updateRecord={() => null} editable={true} />
            )
        },
        {
            Header: "Category",
            accessor: "category",
            Cell: (props) => (
                <EditableCell {...props} updateRecord={() => null} editable={true} />
            )
        },
        {
            Header: "Payment Method",
            accessor: "paymentMethod",
            Cell: (props) => (
                <EditableCell {...props} updateRecord={() => null} editable={true} />
            )
        },
        {
            Header: "Date",
            accessor: "date",
            Cell: (props) => (
                <EditableCell {...props} updateRecord={() => null} editable={false} />
            )
        },
        {
            Header: "Delete",
            accessor: "delete",
            Cell: ({row}) => (
                <button className=" bg-blue-600 text-white py-1 px-3 text-sm font-semibold rounded-md" onClick={() => null}> Delete </button>
            )
        },
    ], [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: records })

    return (
        <div className=" w-full flex md:justify-center overflow-x-scroll mt-16">
            <table {...getTableProps()} className=" w-full">
                <thead>
                  {headerGroups.map((hg) => (
                    <tr {...hg.getHeaderGroupProps()}>
                        {hg.headers.map((column) => (
                            <th className=" bg-blue-600 text-white font-semibold border text-left py-2 px-4" {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, idx) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td className=" text-black border bg-slate-300 py-3 px-4" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}