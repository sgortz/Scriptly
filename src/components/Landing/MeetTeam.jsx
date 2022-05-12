import React from 'react';

const teamMembers = [
  { name: 'Alisha Barraw', photo: '60716566', github: 'akb3y' },
  { name: 'Amina Thiam', photo: '75902083', github: 'amina197' },
  { name: 'Jonathan Ghee', photo: '96302073', github: 'JonathanGhee' },
  { name: 'Peter Schaefferkoetter', photo: '48839550', github: 'pschaefferkoetter' },
  { name: 'Sabrina Gortz', photo: '77306240', github: 'pschaefferkoetter' },
  { name: 'Trevor Edwards', photo: '96637782', github: 'Skoomatron' },
  { name: 'Will Atwood', photo: '33676024', github: 'Acid-Override' },
  { name: 'Yilin Liu', photo: '96321841', github: 'yiiiiilin' },
];

function MeetTeam() {
  return (
    <div className="row">
      <br />
      <h3 className="intro-team">✨ Meet the  Dream Team ✨</h3>
      <hr />
      <br />
      {teamMembers.map((person) => (
        <div className="card member-card col-4">
          <img className="member-photo" src={`https://avatars.githubusercontent.com/u/${person.photo}?v=4`} alt="team member" />
          <div className="card-body">
            <h2 className="card-title member-name">{person.name}</h2>
            <p className="card-text member-github">
              <a href={`https://github.com/${person.github}`}>Fullstack Engineer</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MeetTeam;