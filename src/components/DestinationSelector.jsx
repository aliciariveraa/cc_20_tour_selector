// Task 2 - Create Dropdown Filter

// ⬇️ Dropdown menu to filter tours by name


function DestinationSelector({ tours, selected, onChange }) {

    //  Extract unique tour names
    const destinations = ['All Destinations', ...new Set(tours.map((t) => t.name))];
  
    return (
      <div>
        <label>Select a destination: </label>
        <select value={selected} onChange={(e) => onChange(e.target.value)}>
          {destinations.map((dest, idx) => (
            <option key={idx} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default DestinationSelector;