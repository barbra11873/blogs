import React from 'react';

const Profile = () => {
  // Mock user data
  const user = {
    username: 'JohnDoe',
    bio: 'A passionate blogger sharing thoughts on tech and lifestyle.',
    avatar: 'https://via.placeholder.com/150', // Placeholder avatar
    following: ['User1', 'User2', 'User3'],
    followers: ['User4', 'User5'],
    totalLikes: 250,
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-info">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <div>
          <h2>{user.username}</h2>
          <p>{user.bio}</p>
          <p><strong>Following:</strong> {user.following.length} - {user.following.join(', ')}</p>
          <p><strong>Followers:</strong> {user.followers.length} - {user.followers.join(', ')}</p>
          <p><strong>Total Likes:</strong> {user.totalLikes}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;