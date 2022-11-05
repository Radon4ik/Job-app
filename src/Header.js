import React from "react";
import PropTypes from 'prop-types';


const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <a href="" className="logo">
                    My logo
                </a>
                <nav>
                    <ul className="nav-list">
                        {
                            props.navigationList.map((string)=> {
                                return (
                                    <li key={string} className="nav-list__item">
                                        <a href="/">
                                            {string}
                                        </a>
                                    </li>
                                )
                        })}
                    </ul>
                </nav>
            </div>
        </header>)
}

Header.propTypes = {
    navigationList: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Header;