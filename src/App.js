import React from 'react';
import PostForm from "./components/FetchedForm";
import Posts from "./components/Posts";
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
                <Posts posts={[1,2,3]}/>
            </div>
        </div>
            <div className='col'>
                <h2>Ассинхронные</h2>
                <FetchedForm posts={[]}/>
            </div>
    </div>
  );
}

export default App;
