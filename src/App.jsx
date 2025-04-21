// Task 1 - Fetch & Store Tour Data


// Root component that manages tour data, filtering, and view logic

import { useState, useEffect } from 'react';
import DestinationSelector from './components/DestinationSelector';
import Gallery from './components/Gallery';

const API = 'https://course-api.com/react-tours-project';


function App() {
  const [tours, setTours] = useState([]); // All tours fetched
  const [filteredTours, setFilteredTours] = useState([]); // Tours to display
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('All Destinations');


// Fetch data from the API

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setTours(data);
      setFilteredTours(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch tours.');
    }
    setLoading(false);
  };

   // Load tours when component mounts

  useEffect(() => {
    fetchTours();
  }, []);


   // 🎯 Handle dropdown selection

  const handleSelectChange = (value) => {
    setSelected(value);
    if (value === 'All Destinations') {
      setFilteredTours(tours);
    } else {
      setFilteredTours(tours.filter((tour) => tour.name === value));
    }
  };


  // ❌ Remove a tour

  const removeTour = (id) => {
    setFilteredTours((prev) => prev.filter((tour) => tour.id !== id));
  };


  // 🔁 Reset app and reload tours

  const handleRefresh = () => {
    fetchTours();
    setSelected('All Destinations');
  };

  return (
    <main>
      <h1>🌍 Tour Destination Selector</h1>
      <DestinationSelector
        tours={tours}
        selected={selected}
        onChange={handleSelectChange}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        removeTour={removeTour}
        onRefresh={handleRefresh}
      />
    </main>
  );
}

export default App;