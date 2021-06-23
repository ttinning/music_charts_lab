const ChartList = function({music}) {

    const ChartListItems = music.map((music, index) => {
        return <li key={index}>
            <h2>Position: {index +1}</h2>
            <h3>Artist: {music['im:artist']['label']}</h3>
            <h4>Title: {music['im:name']['label']}</h4>
        </li>
    })

    return (
        <ul>
            {ChartListItems}
        </ul>
    )
}

export default ChartList