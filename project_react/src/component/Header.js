import React, {useState, useEffect} from 'react';
import { Routes, Route, Outlet, Link, NavLink, useNavigate } from "react-router-dom";

function Header(props) {
      
    return (
        <div className="tm-top-bar" id="tm-top-bar">
        <div className="container">
            <div className="row">
                <nav class="navbar navbar-expand-lg narbar-light">
                    <div className="navbar-brand mr-auto" >
                    <NavLink to="/"><img src="../img/logo.png" alt="Site logo"/></NavLink> 
                        Journey
                    </div>
                    <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                            <NavLink className="nav-link active" to="/">메인 <span class="sr-only">(current)</span></NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/page1">Top Destinations</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/page2">Recommended Places</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/help">Contact Us</NavLink>
                            </li> */}
                           
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/hostmode/house">호스트 모드</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/hostregist">숙소 등록</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/help">고객센터</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">로그아웃</NavLink>
                            </li>
                        
                            
                        </ul>
                    </div>                            
            </nav>
        </div>
    </div>
</div>

    );
}

export default Header;