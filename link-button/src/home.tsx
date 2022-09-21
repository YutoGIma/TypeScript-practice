import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return(
        <main>
            <div id="home">
                <div className="" id="menu">
                    <a href="/practiceApp">練習</a>
                    <a href="/post">投稿</a>
                    <p>menu3</p>
                    <p>menu4</p>
                    <p>menu5</p>
                </div>
                <div id="main">
                    <div className="main-content"></div>
                </div>
            </div>
        </main>
    )
}

export default Home