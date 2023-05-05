import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faHeart, } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
            <h1 style={{ color: '#fff' }}>Programmed and designed with love, Samantha <FontAwesomeIcon icon={faHeart} style={{ color: '#FF69B4' }} /></h1>
            <br /><br />
            <h2 style={{ color: '#fff' }}>Language used:Javascript</h2>
            <br /><br />
            <h3 style={{ color: '#fff' }}>Library: React</h3>
            <br /><br />
            <h4>
                <ul style={{ color: '#fff', float: 'left' }}>Incorporated
                    <li>Bootstrap</li>
                    <li>Fontsome</li>
                </ul>
            </h4><br /><br /><br /><br /><br />
            <a style={{ color: 'green', fontWeight: 'bolder' }} href="https://www.fotor.com/features/ai-art-generator/"><h5>AI Images generated from fotor.com</h5></a> <br />            <h5 style={{ fontWeight: 'bolder' }}>
                <span style={{ backgroundColor: 'green', borderRadius: '50%', display: 'inline-block', width: '20px', height: '20px', marginRight: '10px', textAlign: 'center' }}>
                    C</span>
                R E A T E...
                <span style={{ backgroundColor: 'green', borderRadius: '50%', display: 'inline-block', width: '20px', height: '20px', marginRight: '10px', textAlign: 'center' }}>
                    R</span>
                E A D...
                <span style={{ backgroundColor: 'green', borderRadius: '50%', display: 'inline-block', width: '20px', height: '20px', marginRight: '10px', textAlign: 'center' }}>
                    U</span>
                P D A T E...
                <span style={{ backgroundColor: 'green', borderRadius: '50%', display: 'inline-block', width: '20px', height: '20px', marginRight: '10px', textAlign: 'center' }}>
                    D</span>
                E L E T E...
                <span style={{ backgroundColor: 'green', borderRadius: '50%', display: 'inline-block', width: '20px', height: '20px', marginRight: '10px', textAlign: 'center' }}>
                    E</span>
                D I T...
                <span style={{ backgroundColor: 'green', borderRadius: '50%', display: 'inline-block', width: '20px', height: '20px', marginRight: '10px', textAlign: 'center' }}>
                    R</span>
                E P E A T
            </h5>
            <br /><br /><br /><br />
            <p style={{ color: '#fff', fontWeight: 'bolder', float: 'right' }}>Please note these are not real recipes, although I had good intentions my patience had worn thin <FontAwesomeIcon style={{ fontSize: '25px', color: 'yellow' }} icon={faSmile} /> </p>


        </>
    );
};

export default About;