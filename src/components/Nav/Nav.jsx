import React from "react";
import "./Nav.css";

import { useNavigate } from "react-router-dom";
import { links } from "../../apiData/NavLinks";

const Nav = ({ setIsOpen, activeLinks }) => {
    const navigate = useNavigate();

    const handleLinkClick = (links) => {
        navigate(links.routingURL);
    };
    const showContactpage = () => {
        setIsOpen(true);
    };


    return (
        <nav className="container">
            <div className="logo">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3LF8LvX6rVhvBAr_jnh7W7TCJVdAecf7Fw&usqp=CAU"
                    alt=""
                />
            </div>
            <div className="link">
                {links.map((links) => (
                    <a
                        key={links.id}
                        onClick={() => handleLinkClick(links)}
                    // className={activeLinks === links ? 'active' : ''}
                    >
                        {links.title}
                    </a>
                ))}
                <button className="btn1" onClick={() => showContactpage()}>
                    Contact US
                </button>
            </div>
        </nav>
    );
};

export default Nav;
