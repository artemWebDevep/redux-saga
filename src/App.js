import React from 'react';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import FetchedForm from "./components/FetchedForm";


function App() {
  return (
    <div className="container pt-3">
        <div className='row'>
            <div className='col'>
                <PostForm/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <h2>Синхронные посты</h2>
                <Posts />
            </div>
        </div>
            <div className='col'>
                <h2>Ассинхронные</h2>
                <FetchedForm />
            </div>
    </div>
  );
}

export default App;
