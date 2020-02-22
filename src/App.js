import React from 'react';
import './App.css';
import HotelCard from './components/hotel-card/HotelCard';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Hotel Reservation App</h1>
      </header>
      <HotelCard />
    </div>
  );
}

export default App;
