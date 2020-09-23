import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage"
import { Route } from "react-router-dom";
import PostPage from './pages/PostPage';
import PutPage from './pages/PutPage';
import DeletePage from './pages/DeletePage';
import GetPage from './pages/GetPage';

function App() {
  return (
    <div className="app">
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/post" exact component={PostPage}></Route>
      <Route path="/get" exact component={GetPage}></Route>
      <Route path="/put" exact component={PutPage}></Route>
      <Route path="/delete" exact component={DeletePage}></Route>
    </div>
  );
}

export default App;
