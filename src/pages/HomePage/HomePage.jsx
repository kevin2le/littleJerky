import React from 'react';
import './HomePage.css';

const HomePage = (props) => {
    return (
        <div>
            <div>
                <div class = "center">
                    <h1>The Little Jerky Company</h1>
                </div>
                <div class = "center">
                    <p style={{fontSize: 17}}><strong>Welcome to our home page! We’re a small family business, focused on making the best
                    jerky.<br/> We make jerky in small batches. We start with 10 lbs of meat and turn it into just 3 lbs.
                    We <br/>only specialize in only type of jerky so we can focus on quality.</strong></p>                 
                </div>
                <div class = "center">
                    <img src="https://i.imgur.com/PCbp5kE.jpg" style={{width: 775, height: 455, borderRadius: 5}}/>
                </div>    
                
            </div>
        </div>
    )
}

export default HomePage;