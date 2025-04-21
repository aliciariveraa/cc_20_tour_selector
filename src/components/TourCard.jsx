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
  