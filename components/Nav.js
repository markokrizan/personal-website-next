import { useState, useEffect } from 'react';

import Bio from '../components/NavPreview/Bio';
import Blog from '../components/NavPreview/Blog';
import Contact from '../components/NavPreview/Contact';

import {
    PREVIEW_TYPE_BIO, 
    PREVIEW_TYPE_BLOG,
    PREVIEW_TYPE_CONTACT
} from '../constants';

const Nav = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedPreview, setSelectedPreview ] = useState(null);

    const isShownClass = isOpen ? 'show' : '';
    const isCurrentClass = type => type === selectedPreview ? 'current' : ''; 

    const previewComponent = {
        [PREVIEW_TYPE_BIO] : <Bio/>,
        [PREVIEW_TYPE_CONTACT] : <Contact/>,
        [PREVIEW_TYPE_BLOG] : <Blog/>
    }

    useEffect(() => {
        if(!isOpen){
            setSelectedPreview(null);
        }
    }, [isOpen]);

    return (<header>
        <div className={`menu-btn ${isOpen ? 'close' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
        </div>
        <nav className={`menu ${isShownClass}`}>
            <div className={`menu-branding ${isShownClass}`}>
                <div className={`portrait ${selectedPreview ? 'has-selection' : ''}`}></div>
                {previewComponent[selectedPreview]}
            </div>
            <ul className={`menu-nav ${isShownClass}`}>
                <li className={`nav-item ${isShownClass} ${isCurrentClass(PREVIEW_TYPE_BIO)}`}>
                    <a className="nav-link" onClick={() => setSelectedPreview(PREVIEW_TYPE_BIO)}>
                        <i className="fas fa-info-circle fa-lg"></i>
                    </a>
                </li>
                <li className={`nav-item ${isShownClass} ${isCurrentClass(PREVIEW_TYPE_BLOG)}`}>
                    <a className="nav-link" onClick={() => setSelectedPreview(PREVIEW_TYPE_BLOG)}>
                        <i className="fab fa-blogger fa-lg"></i>
                    </a>
                </li>
                <li className={`nav-item ${isShownClass} ${isCurrentClass(PREVIEW_TYPE_CONTACT)}`}>
                    <a className="nav-link" onClick={() => setSelectedPreview(PREVIEW_TYPE_CONTACT)}>
                        <i className="far fa-address-card fa-lg"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </header>);
};


export default Nav;
