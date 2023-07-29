// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Home.css'; // Import the CSS file
import profile1 from '../Images/Profile1.png'
import profile2 from '../Images/Profile2.png'
import profile3 from '../Images/Profile3.png'
import profile4 from '../Images/Profile4.png'
import profile5 from '../Images/Profile5.png'
import profile6 from '../Images/Profile6.png'
import profile7 from '../Images/Profile7.png'
import profilePlaceholder from '../Images/ProfilePlaceHolder.png'

export const Home = () => {
  const navigate = useNavigate();
  const initialProfiles = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'Adventure seeker and nature lover.',
      // imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.byrdie.com%2Fcelebrity-beauty-secrets&psig=AOvVaw15Viby17uxpqREBymJN4KB&ust=1690689163886000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC3ho2Cs4ADFQAAAAAdAAAAABAE',
      imageUrl: profile1
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'Photographer and travel enthusiast.',
      imageUrl: profile2,
    },
    {
        id: 3,
        name: 'Alicia Jones',
        bio: 'Love to swim and kyak.',
        imageUrl: profile3,
    },
    {
        id: 4,
        name: 'Mike Reid',
        bio: 'Long distance runner',
        // imageUrl: 'https://pixabay.com/link/?ua=cd3%3Dimage%26cd7%3Den%253Arunning%2Bfootsteps%253AUSA%26ec%3Dapi_ad%26ea%3Dnavigate%26el%3Dgetty%26tid%3DUA-20223345-1%26dr%3Dhttps%253A%252F%252Fpixabay.com%252F&sp=%2524%3Dadvertisement_clicked%26user_action%3Dnavigate%26ad_partner%3Dgetty%26ad_content%3Dapi_ad%26ad_type%3D%26media_type%3Dphoto%26media_subtype%3D%26media_id%3D&next=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Frunning-on-the-beach-at-sunset-gm466580874-60492700%3Futm_source%3Dpixabay%26utm_medium%3Daffiliate%26utm_campaign%3DSRP_image_sponsored%26utm_content%3Dhttps%253A%252F%252Fpixabay.com%252Fimages%252Fsearch%252Frunning%252520footsteps%252F%26utm_term%3Drunning%2Bfootsteps&hash=dc0fef881b34a129344252f3222fd1695a967b69&=',
        imageUrl: profile4
    },
    {
        id: 5,
        name: 'Adam Smith',
        bio: 'Love to swim and kyak.',
        imageUrl: profile5,
    },
    {
        id: 6,
        name: 'Stephanie clerk',
        bio: 'Love to swim and kyak.',
        imageUrl: profile6,
    },
    {
        id: 7,
        name: 'Bradford John',
        bio: 'Love to swim and kyak.',
        imageUrl: profile7,
    },
  ];

  const [profiles, setProfiles] = useState(initialProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex < profiles.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex < profiles.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handleProfileClick = () => {
    navigate('/profile');
  }

  return (
    <div className="home auth-form-container">
      <div className="profile-card">
        <div className="profile-image">
          <img src={profiles[currentIndex].imageUrl} alt={`Profile ${currentIndex + 1}`} width='150' height='100'/>
        </div>
        <div className="profile-info">
          <h2>{profiles[currentIndex].name}</h2>
          <p>{profiles[currentIndex].bio}</p>
        </div>
      </div>
      <div className="swipe-buttons">
        <button onClick={handleSwipeLeft}>Swipe Left</button>
        <button onClick={handleSwipeRight}>Swipe Right</button>
      </div>
      <div className='profile-icon'>
        <button onClick={handleProfileClick}><img src={profilePlaceholder} width="20" height="20"/></button>
      </div>
    </div>
  );
};

export default Home;
