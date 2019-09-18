import React from 'react';

import TeamMember from './TeamMember';

export default function TeamList({ teamMembers, memberToEdit }) {
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