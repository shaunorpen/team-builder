import uuid from 'uuid';

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

export {initialTeamMembers, initialFormValues};