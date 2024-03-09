import React, { useState } from 'react';
import './App.css';

interface SchoolProps {
  school: string;
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  record: string; // Added record property
}

const TeamData = require('./CollegeBasketballTeams.json');

function Welcome() {
  return (
    <>
      <h1>Are you ready for March Madness?</h1>
      <h2>A list of all NCAA teams</h2>
    </>
  );
}

function School({ school, name, city, state, record }: SchoolProps) {
  return (
    <div>
      <h3>{school}</h3>
      <p>Mascot Name: {name}</p>
      <p>
        Location: {city}, {state}
      </p>
      <p>Record: {record}</p> {/* Displaying the record */}
    </div>
  );
}

function addRecordToTeams(teams: SchoolProps[]) {
  return teams.map((team) => ({
    ...team,
    record: '0-0', // Starting record
  }));
}

function TeamList() {
  const teamsWithRecord = addRecordToTeams(TeamData.teams);

  return (
    <>
      <div>
        {teamsWithRecord.map((team: SchoolProps, index: number) => (
          <School key={index} {...team} />
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
