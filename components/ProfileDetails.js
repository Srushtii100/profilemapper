import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // For handling route params (e.g., profile ID)
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ProfileDetails.css'; // For custom styles (if needed)

const ProfileDetails = () => {
  const { id } = useParams();  // Assume the profile ID is passed in the URL
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile details by ID (you can replace this with an API call)
  useEffect(() => {
    // Simulate an API call to fetch profile data based on ID
    const fetchProfileData = async () => {
      setLoading(true);
      // Here you would fetch data from an API or your backend, for now, let's simulate
      const profileData = {
        id: id,
        name: "John Doe",
        photo: "/images/john_doe.jpg",  // Example image URL
        description: "A passionate developer from San Francisco.",
        address: "123 Main St, San Francisco, CA",
        latitude: 37.7749,
        longitude: -122.4194,
      };
      setProfile(profileData);
      setLoading(false);
    };

    fetchProfileData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-details-container">
      <div className="profile-header">
        <img src={profile.photo} alt={profile.name} className="profile-image" />
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p>{profile.description}</p>
          <h3>Address:</h3>
          <p>{profile.address}</p>
        </div>
      </div>

      <div className="profile-map">
        <h3>Location:</h3>
        <MapContainer
          center={[profile.latitude, profile.longitude]}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[profile.latitude, profile.longitude]}>
            <Popup>{profile.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ProfileDetails;
