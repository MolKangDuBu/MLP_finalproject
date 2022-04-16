import React from 'react';
import { useLocation,Link } from 'react-router-dom';
function Payment(props) {
    const data = useLocation();
    console.log(data.state);
    return (
        <div>
            
        </div>
    );
}

export default Payment;