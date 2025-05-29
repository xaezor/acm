import React, { useState, useEffect } from 'react';
import './All.css';
import logo from "./acmlogo.png"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'contact', 'team', 'projects'];
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            <div className="header-container">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
                
                <nav className="nav-desktop">
                    <div className="nav-links">
                        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>About</a>
                        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>Divisions</a>
                        <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Newsletter</a>
                        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Events</a>
                        <a href="#team" className={activeSection === 'team' ? 'active' : ''}>Team</a>
                        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
                    </div>
                    <a className="login-button" href="#contact">Member Login</a>
                </nav>

                <div className="menu-controls">
                    <input 
                        type="checkbox" 
                        id="checkbox" 
                        checked={menuOpen}
                        onChange={() => setMenuOpen(!menuOpen)}
                    />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>
            </div>

            <div className={`fullscreen-nav ${menuOpen ? 'open' : ''}`}>
                <nav className="nav-links">
                    <a href="#home" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>Divisions</a>
                    <a href="#services" onClick={() => setMenuOpen(false)}>Newsletter</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Events</a>
                    <a href="#team" onClick={() => setMenuOpen(false)}>Team</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a className="login-button" href="#contact" onClick={() => setMenuOpen(false)}>Member Login</a>
            </nav>
            </div>
        </header>
    );
};

export default Header;
