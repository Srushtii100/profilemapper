import React from 'react';

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-image" />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={() => onSummaryClick(profile)}>Summary</button>
    </div>
  );
};

export default ProfileCard;
