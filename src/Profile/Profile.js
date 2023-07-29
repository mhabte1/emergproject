import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file

export const Profile = () => {
  // State to store user profile data
  const [profile, setProfile] = useState({
    username: '',
    bio: '',
    photos: [],
  });

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState, [name]: value }));
  };

  // Function to handle photo upload
  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setProfile((prevState) => ({ ...prevState, photos: prevState.photos.concat(files) }));
  };

  // Function to handle profile deletion
  const handleProfileDelete = () => {
    // Implement profile deletion logic here
    setProfile({
        username: '',
        bio: '',
        photos: [],
      });
  };

  // Function to handle connecting to social media
  const handleConnectSocialMedia = () => {
    const instagramAuthUrl = 'https://www.instagram.com/';

    // Redirect the user to the Instagram authorization URL
    window.location.href = instagramAuthUrl;
  };

  return (
    <div className='Profile auth-form-container'>
      <h1>Profile</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="photos">Upload Photos</label>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
          />
        </div>
        <button type="button" onClick={handleConnectSocialMedia}>Connect Social Media</button>
        <button type="button" onClick={handleProfileDelete}>Delete Profile</button>
      </form>
      <div>
        <h2>Uploaded Photos:</h2>
        {profile.photos.map((photo, index) => (
          <img key={index} src={URL.createObjectURL(photo)} alt={`Uploaded ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Profile;