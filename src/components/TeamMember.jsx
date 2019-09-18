import React from 'react';

export default function TeamMember({ teamMember, memberToEdit }) {
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