import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterComponent(props) {
    return (
        <div>
              <footer className="tm-container-outer">
                <p className="mb-0">Copyright © <span className="tm-current-year">2018</span> Your Company 
                    
                . Designed by 
                <a rel="nofollow" href="http://www.google.com/+templatemo" target="_parent">Template Mo</a></p>
            </footer> 
        </div>
    );
}

export default FooterComponent;