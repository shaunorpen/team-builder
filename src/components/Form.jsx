import React from 'react';

export default function Form({formValues, handleChange, onSubmit, isDisabled}) {
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