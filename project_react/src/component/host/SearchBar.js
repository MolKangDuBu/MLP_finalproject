import React from 'react';

class SearchBar extends React.Component{

    render(){
        <div className="searchBar">
            <div id="mainLogo">
                <img
                src="이미지 주소"
                alt="place-now logo"
                />
            </div>
            <input
                id="pac-input"
                className="controls"
                type="text"
                placeholder="Search Box"
            />
        </div>
    }

}

export default SearchBar;