import React from 'react';
import {Footer,
} from 'react-materialize'
import './FooterBar.css'

const FooterBar = (props) => {
    return (
        <div>
            <div className="foot">
                <Footer copyrights="&copy">
                </Footer>
            </div>
        </div>
    )
}

export default FooterBar;