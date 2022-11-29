import Table from "../components/Table"

const TablePage = () => {

    const fruits = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 15},
        {name: 'Banana', color: 'bg-yellow-400', score: 10},
        {name: 'Lime', color: 'bg-green-400', score: 2}
    ]

    const config = [
        {
            label: 'Name',
            render: fruit => fruit.name
            
        },
        {
            label: 'Color',
            render: fruit => <div className={`p-3 m-2 ${fruit.color}`}></div>
            
        },
        {
            label: 'Score',
            render: fruit => fruit.score
            
        },

    ]

    const keyFn = (fruit) => {
        return fruit.name
    }

    return (
        <div>
            <Table data={fruits} config={config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage;