import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/HomePage';
import PostPage from './components/pages/PostPage';
import Footer from './components/layout/Footer';
import BlogContextProvider from './context/BlogContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BlogContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:postId" exact component={PostPage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </BlogContextProvider>
  );
}

export default App;
