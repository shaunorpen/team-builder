import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';
import { initialFormValues, initialTeamMembers } from './data/data';

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
