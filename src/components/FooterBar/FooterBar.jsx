import React from 'react';
import {Link} from 'react-router-dom';
import {Footer,
        Main,
        Body
} from 'react-materialize'
import './FooterBar.css'

const FooterBar = (props) => {
    return (
        <div>
        <main>
        <body>
        <Footer copyrights="&copy 2018 TheLittleJerkyCo"
            moreLinks={
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            }
        links={
        <ul>
        <li><a className="grey-text text-lighten-3" href="#!">Email Us</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">InstaGram</a></li>
        </ul>
        }
        className='example'
        >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
        </body>
        </main>
        </div>
    )
}

export default FooterBar;