const PinnedItem = ({ item, removePinFunc }) => {
    const openLink = () => {
        if (item.link) {
            window.open(item.link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="pin">
            <button className="pin-delete-button" onClick={() => removePinFunc(item.id)}>x</button>
            <h2 className="pin-title">{item.title}</h2>
            <div className="pin-content">
                <p>{item.content}</p>
            </div>
            {item.link && <button onClick={openLink} className="pin-link-button">Visit Art</button>}
        </div>
    );
}

export default PinnedItem;
