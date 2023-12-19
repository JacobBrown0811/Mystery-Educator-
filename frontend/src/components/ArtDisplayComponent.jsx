function ArtDisplay({ data }) {
    if (!data) {
        return <p>Loading art...</p>;
    }

    return (
        <div className="art-display">
            <h2>{data.title}</h2>
            <p>Artist: {data.artist}</p>
            <p>Year: {data.year}</p>
            {data.classification && <p>Classification: {data.classification}</p>}
            <a href={data.url} target="_blank" rel="noopener noreferrer">View Artwork</a>
        </div>
    );
}

export default ArtDisplay