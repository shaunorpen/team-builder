import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

const initialTeamMembers = [
  {id: uuid(), name: 'Shaun', email: 'shaun@lambda.com', role: 'Coach'},
  {id: uuid(), name: 'Dave', email: 'dave@lambda.com', role: 'Front End'},
  {id: uuid(), name: 'Justin', email: 'justin@lambda.com', role: 'Back End'},
];

const initialFormValues = {
  name: '',
  email: '',
  role: '',
  id: '',
}

function TeamMember({ teamMember, memberToEdit }) {
  return (
    <div>
      <span>{teamMember.name}</span>
      <span>{teamMember.email}</span>
      <span>{teamMember.role}</span>
      <span>
        <button onClick={() => memberToEdit(teamMember.id)} >Edit</button>
      </span>
    </div>
  );
}

function TeamList({ teamMembers, memberToEdit }) {
  return (
    <>
      <h2>Team List</h2>
      <div>
        <span>Name</span>
        <span>Email</span>
        <span>Role</span>
      </div>
      {teamMembers.map(teamMember => <TeamMember teamMember={ teamMember } memberToEdit={memberToEdit} key={teamMember.id} />)}
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
          <label htmlFor='email'>Email</label>
          <input value={formValues.email} onChange={handleChange} type='text' id='email' />
        </div>
        <div>
          <label htmlFor='role'>Role</label>
          <input value={formValues.role} onChange={handleChange} type='text' id='role' />
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
    if (!formValues.id) {
      setTeamMembers( [...teamMembers, { ...formValues, id: uuid() } ]);
    } else {
      const updatedTeamMembers = teamMembers.map(teamMember => {
        if (teamMember.id === formValues.id) {
          return formValues
        } else {
          return teamMember
        }
      })
      setTeamMembers(updatedTeamMembers);
    }
    setFormValues(initialFormValues);
  }

  const isDisabled = () => !(formValues.name && formValues.email && formValues.role);

  const memberToEdit = (memberId) => {;
    setFormValues(teamMembers.find(teamMember => teamMember.id === memberId));
  }

  return (
    <>
      <div className="App">
        <div className='team'>
          <TeamList teamMembers={ teamMembers } memberToEdit={memberToEdit} />
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
