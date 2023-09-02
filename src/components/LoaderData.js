export default function LoaderData({ image: { sprites, name, stats } }) {
    // console.log(stats)
    return (
        <div>
            <img
                src={sprites.other['official-artwork'].front_default}
                alt={name}
                width="300" />
            <h2>{name}</h2>
            <ul>
                {stats.map(entry => (
                    <li key={entry.stat.name}>
                        {entry.stat.name}: {entry.base_stat}
                    </li>
                ))}
                
            </ul>
        </div>
    )
}