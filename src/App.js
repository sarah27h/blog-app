import React from 'react';
import './App.css';
import Banner from './components/layout/Banner';
import Navbar from './components/layout/navbar';
import PostList from './components/posts/PostList';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <PostList />
      <Footer />
    </div>
  );
}

export default App;
