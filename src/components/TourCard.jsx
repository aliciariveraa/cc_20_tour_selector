// Tour card UI with tour info and remove button

function TourCard({ id, name, info, image, price, onRemove }) {
    return (
      <div className="tour-card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>{info}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    );
  }
  
  export default TourCard;

  // Task 4 - Reset View
  
  if (tours.length === 0) {
    return (
      <div>
        <p>No tours left. Refresh to reload.</p>
        <button onClick={onRefresh}>🔄 Refresh</button>
      </div>
    );
  }
  