import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import Map from './Map';

const ProfileList = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} onSummaryClick={handleSummaryClick} />
        ))}
      </div>
      {selectedProfile && <Map address={selectedProfile.address} />}
    </div>
  );
};

export default ProfileList;
