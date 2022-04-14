import React from 'react';
import {Link} from 'react-router-dom'

function HighlightGuide(props) {
    return (
        <div className="tm-recommended-place">
            <img src={props.obj.center_image} alt="Image" className="img-fluid tm-recommended-img"/>
            <div className="tm-recommended-description-help-box">
                <Link to={"/help/view/"+props.obj.center_id}>
                    <h3 className="tm-recommended-title">{props.obj.center_title}</h3>
                </Link>
                <p className="tm-text-highlight">{props.obj.center_create}</p>
                <p className="tm-text-gray" style={{"whiteSpace":"pre-wrap"}}>
                    {props.obj.center_contents}
                </p>   
            </div>               
        </div>
    );
}

export default HighlightGuide;