import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

const initialTeamMembers = [
  {id: uuid(), name: 'Shaun', age: '37', title: 'Manager'},
  {id: uuid(), name: 'Dave', age: '35', title: 'Coach'},
  {id: uuid(), name: 'Justin', age: '40', title: 'Captain'},
];

const initialFormValues = {
  name: '',
  age: '',
  title: '',
}

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
    <>
      <h2>Team List</h2>
      <div>
        <span>Name</span>
        <span>Age</span>
        <span>Title</span>
      </div>
      {teamMembers.map(teamMember => <TeamMember teamMember={ teamMember } />)}
    </>
  );
} 

function Form({formValues, handleChange, onSubmit, isDisabled}) {
  return (
    <>
      <h2>Add Team Member</h2>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input value={formValues.name} onChange={handleChange} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input value={formValues.age} onChange={handleChange} type='text' id='age' />
        </div>
        <div>
          <label htmlFor='title'>Title</label>
          <input value={formValues.title} onChange={handleChange} type='text' id='title' />
        </div>
        <button onClick={onSubmit} disabled={isDisabled()} >Submit</button>
      </form>
    </>
  );
}

function App() {
  
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setTeamMembers( [...teamMembers, formValues ]);
    setFormValues(initialFormValues);
  }

  const isDisabled = () => !(formValues.name && formValues.age && formValues.title);

  return (
    <>
      <div className="App">
        <div className='team'>
          <TeamList teamMembers={ teamMembers } />
        </div>
        <div className='form'>
          <Form 
            formValues={formValues}
            handleChange={handleChange}
            onSubmit={onSubmit}
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </>
  );
}

export default App;
