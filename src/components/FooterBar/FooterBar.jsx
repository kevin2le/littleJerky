import React from 'react';
import {Footer,
        
} from 'react-materialize'
import './FooterBar.css'

const FooterBar = (props) => {
    return (
        <div className="flexing">
        <div className="Site">
            <div className="Site-content">
                <div className="#90a4ae blue-grey lighten-2">
                <Footer copyrights="©2018 LittleJerkyCo" className="#90a4ae blue-grey">
                    <p> If you have ever have any questions for us please feel to email us </p>
                </Footer>
                </div>
            </div>
        </div>
     </div>
    )
}

export default FooterBar;