import { Fragment } from "react";


const Table = ({ data, config, keyFn }) => {

    const rows = data.map(rowData => {
        const renderCells = config.map(column => {
           return (
            <td
            className="p-2" 
            key={column.label}
            >
            {column.render(rowData)}
            </td>)
        });
        return (
            <tr key={keyFn(rowData)} className="border-b">
                {renderCells}
            </tr>
        )
    });

    const headers = config.map(column => {
        if(column.header) {
            return (
                <Fragment key={column.label}>
                    {column.header()}
                </Fragment>
            )
        }
        return (
            <th key={column.label}>{column.label}</th>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {headers}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Table