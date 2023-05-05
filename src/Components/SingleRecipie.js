import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons'

const SingleRecipie = ({ recipies, onDelete }) => {
    const urlParameters = useParams();
    const navigate = useNavigate();

    let recipieToDisplay;

    recipieToDisplay = recipies.find((item) => (
        item.id === Number(urlParameters.recipieID)
    ));

    const handleDelete = () => {
        onDelete(recipieToDisplay.id);
        navigate('/');
    }

    return (
        <div className="recipe-container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="image-container" style={{ float: 'left' }}>
                        <img style={{ backgroundColor: '#fff', padding: '5px', border: '2px solid green', borderRadius: '5px' }} src={recipieToDisplay.image} alt="recipe" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="text-container" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                        <div className="text">
                            <p style={{ textTransform: 'uppercase', color: '#fff' }}>{recipieToDisplay.recipie} <FontAwesomeIcon style={{ color: '#FF69B4' }} icon={faHeart} /></p>
                            <br />
                            <br />
                            <h3 style={{ color: '#fff', borderBottom: 'solid green 3px' }}>The Ingredients you will need are:</h3>
                            <ul style={{ color: '#fff' }}>
                                {recipieToDisplay &&
                                    recipieToDisplay.ingridients &&
                                    recipieToDisplay.ingridients.map((ingridient, index) => (
                                        <li key={index}>{`${ingridient.amount || ''} : ${ingridient.measurement || ''} - ${ingridient.name || ''} `}</li>
                                    ))}
                            </ul>
                            <br />
                            <h3 style={{ color: '#fff', borderBottom: 'solid #FF69B4 3px' }}>follow these steps:</h3>
                            <ul style={{ listStyleType: "decimal", color: '#fff' }}>
                                {recipieToDisplay &&
                                    recipieToDisplay.steps &&
                                    recipieToDisplay.steps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                            </ul>
                            <div>
                                <Link
                                    to={`/edit/${recipieToDisplay.id}`}
                                    className="EditStyle"
                                    style={{ border: "1px solid #fff" }}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={handleDelete}
                                    value={recipieToDisplay.id}
                                >
                                    delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Link to={`/`}>
                <FontAwesomeIcon
                    style={{
                        padding: "10px",
                        backgroundColor: "transparent",
                        fontSize: "1.5rem",
                        color: "white",
                        cursor: "pointer",
                        outline: "none",
                        borderRadius: "5px",
                        border: "1px solid white",
                        float: 'left'
                    }}
                    icon={faHome} />
            </Link>
        </div>
    );
}

export default SingleRecipie;