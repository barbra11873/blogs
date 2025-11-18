import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/create">Create Post</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/friends" element={<Dashboard />} />
            <Route path="/notifications" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
