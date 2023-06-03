const FlowerList = ({ flower }) => {
    return (
        <div className="flower-list">
            {flower.map((flowers) => (
                <div className="flow-preview" key={flowers.id}>
                    <h1>{ flowers.flowername}</h1>
                    <p>{ flowers.descript}</p>
                </div>
            ))}
        </div>
    )
}

export default FlowerList