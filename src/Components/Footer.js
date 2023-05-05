import React from 'react'

const Footer = () => {
    return (
        <footer className="container-fluid footer">
            <div className="row">
                <div style={{ color: '#fff' }} className="col-12 col-md-4 footer-section">
                    <p>React Crude Recipe App.</p>
                    <p>&copy; 2023 | All Rights Reserved</p>
                </div>
                <div style={{ color: '#fff' }} className="col-12 col-md-4 footer-section">
                    <p style={{ textTransform: 'uppercase', color: '#fff' }} className="title">Contact Me</p>
                    <p>samantha.quinlan@gmail.com</p>
                    <p>+353834341813</p>
                    <p>Tipperary, Ireland </p>
                </div>
                <div className="col-12 col-md-4 footer-section">
                    <div style={{ textTransform: 'uppercase', color: '#fff' }} className="Socials">
                        <p className="title">Socials</p>
                        <a href="https://www.behance.net/samanthaquinlan"><img src="/images/behance.png" width='45' height='45' alt='behance' style={{ marginRight: '10px' }}></img></a>
                        <a href="https://www.linkedin.com/in/samantha-griessel/"><img src="/images/linkedIn.png" width='45' height='45' alt='LinkedIn' style={{ marginRight: '10px' }}></img></a>
                        <a href="https://www.instagram.com/samanthagriessel92/"><img src="/images/instagram.png" width='45' height='45' alt='instagram' style={{ marginRight: '10px' }}></img></a>
                    </div>
                </div>
            </div>
        </footer>
    );


}

export default Footer;
