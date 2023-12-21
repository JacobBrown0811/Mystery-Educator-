const PinnedItem = ({ item, removePinFunc }) => {
    const openLink = () => {
        if (item.link) {
            window.open(item.link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="pin">
            <button className="pin-delete-button" onClick={() => removePinFunc(item.id)}>x</button>
            <p className="pin-title">{item.title}</p>
            <p className="pin-content">{item.content}</p>
            {item.link && <button onClick={openLink} className="pin-link-button">View Art</button>}
        </div>
    );
}

export default PinnedItem;
