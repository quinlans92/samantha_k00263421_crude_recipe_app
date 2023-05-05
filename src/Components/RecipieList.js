import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



const RecipieList = ({ recipies }) => {
    const [highlightedRecipe, setHighlightedRecipe] = useState(null);
    return (
        <div className="container-fluid" style={{ paddingTop: '30px' }}>
            <div className="row justify-content-center">
                {recipies.map((item) => (
                    <div className="col-md-4 col-sm-6 col-xs-12" key={item.id}
                        onMouseEnter={() => setHighlightedRecipe(item.id)}
                        onMouseLeave={() => setHighlightedRecipe(null)}
                        style={{
                            border: '2px solid green',
                            padding: '2px',
                            borderRadius: '9px',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            margin: '50px',
                            fontWeight: 'bold',
                            backgroundColor: highlightedRecipe === item.id ? '#eee' : '#818386',
                            transition: 'background-color 0.2s ease-in-out',
                        }}>
                        <div className="card mb-3">
                            <Link to={`/recipie/${item.id}`}>
                                <img src={item.image} alt="RecipieImage" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
                            </Link>
                            <div className="card-body">
                                <h2 className="card-title" style={{ color: '#fff' }}>{item.recipie} <FontAwesomeIcon icon={faHeart} style={{ color: '#FF69B4' }} /></h2>
                                <Link style={{ textDecoration: 'none', color: '#fff' }} to={`/recipie/${item.id}`} className="btn btn-sm btn-secondary">View Recipe</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );



}
export default RecipieList;



