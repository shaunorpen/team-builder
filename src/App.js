import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

const initialTeamMembers = [
  {id: uuid(), name: 'Shaun', age: '37', title: 'Manager'},
  {id: uuid(), name: 'Dave', age: '35', title: 'Coach'},
  {id: uuid(), name: 'Justin', age: '40', title: 'Captain'},
];

function TeamMember({ teamMember }) {
  return (
    <div>
      <span>{teamMember.name}</span>
      <span>{teamMember.age}</span>
      <span>{teamMember.title}</span>
    </div>
  );
}

function TeamList({ teamMembers }) {
  return (
    teamMembers.map(teamMember => <TeamMember teamMember={ teamMember } />)
  );
}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  return (
    <>
      <div className="App">
        <h2>Team List</h2>
        <TeamList teamMembers={ teamMembers } />
      </div>
      <div>
        <h2>Add or Edit team Member</h2>
        <form>
          <div>
            <label htmlFor='nameInput'>Name</label>
            <input type='text' id='nameInput' />
          </div>
          <div>
            <label htmlFor='ageInput'>Age</label>
            <input type='text' id='ageInput' />
          </div>
          <div>
            <label htmlFor='titleInput'>Title</label>
            <input type='text' id='titleInput' />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
