import React from 'react';
import './App.css';
import Banner from './components/layout/Banner';
import Navbar from './components/layout/navbar';
import PostList from './components/posts/PostList';
import Footer from './components/layout/Footer';
import BlogContextProvider from './context/BlogContext';

function App() {
  return (
    <BlogContextProvider>
      <div className="App">
        <Navbar />
        <Banner />
        <PostList />
        <Footer />
      </div>
    </BlogContextProvider>
  );
}

export default App;
