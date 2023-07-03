import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faMinus, faLeaf } from '@fortawesome/free-solid-svg-icons'

const EditRecipie = ({ recipies, onEdit }) => {
    const urlParameters = useParams();
    const navigate = useNavigate();

    const recipieToEdit = recipies.find(
        (item) => item.id === Number(urlParameters.recipieID)
    );

    const [ingridients, setIngridients] = useState(recipieToEdit.ingridients.map((ingridient) => ({ ...ingridient })));

    const [steps, setSteps] = useState(recipieToEdit.steps);
    const [image, setImage] = useState(recipieToEdit.image);


    const handleIngredientsNameChange = (event, index) => {
        const updatedIngredients = [...ingridients];
        updatedIngredients[index][event.target.name] = event.target.value;
        setIngridients(updatedIngredients);
    };

    const handleIngredientsMeasurementChange = (event, index) => {
        const updatedIngredients = [...ingridients];
        updatedIngredients[index] = {
            ...updatedIngredients[index][event.target.name],
            measurement: event.target.value,
        };
        setIngridients(updatedIngredients);
    };

    const handleIngredientsAmountChange = (event, index) => {
        const updatedIngredients = [...ingridients];
        updatedIngredients[index] = {
            ...updatedIngredients[index],
            amount: event.target.value,
        };
        setIngridients(updatedIngredients);
    };

    const handleStepsChange = (event, index) => {
        const updatedSteps = [...steps];
        updatedSteps[index] = event.target.value;
        setSteps(updatedSteps);
    };

    const handleDeleteIngredient = (index) => {
        const updatedIngredients = [...ingridients];
        updatedIngredients.splice(index, 1);
        setIngridients(updatedIngredients);
    };

    const handleDeleteStep = (index) => {
        const updatedSteps = [...steps];
        updatedSteps.splice(index, 1);
        setSteps(updatedSteps);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedRecipie = {
            ...recipieToEdit,
            recipie: e.target.recipieName.value,
            ingridients,
            steps,
            image,


        };

        onEdit(updatedRecipie);
        navigate('/');
    };

    // const handleBack = () => {
    //     navigate("/");
    // };

    return (
        <>
            <form style={{ border: '1px solid white', borderRadius: '9px', padding: '10px' }} onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="recipieName">Recipe Name:</label>
                    <input type="text" defaultValue={recipieToEdit.recipie} name="recipieName" className="form-control" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input type="file" onChange={handleImageChange} className="form-control" />
                    {image && (
                        <img
                            src={image}
                            alt="Recipe"
                            style={{ maxWidth: "100%", marginTop: "10px" }}
                        />
                    )}
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="ingridients">Ingredients:</label>
                    {ingridients.map((ingridient, index) => (
                        <div key={`ingredient-${index}`} className="ingredient input-group mb-3">
                            <select
                                value={ingridient.measurement || ''}
                                onChange={(event) => handleIngredientsMeasurementChange(event, index)}
                                className="form-control"
                                name="measurement"
                            >
                                <option value="">Select Measurement</option>
                                <option value="grams">Grams</option>
                                <option value="cups">Cups</option>
                                <option value="ml">Milliliters</option>
                                <option value="tablespoons">Tablespoons</option>
                                <option value="teaspoons">Teaspoons</option>
                            </select>
                            <input
                                type="text"
                                value={ingridient.amount || ''}
                                onChange={(event) => handleIngredientsAmountChange(event, index)}
                                className="form-control"
                                name="amount"
                            />
                            <input
                                type="text"
                                value={ingridient.name || ''}
                                onChange={(event) => handleIngredientsNameChange(event, index)}
                                className="form-control"
                                name="name"
                            />
                            <button type="button" className="my-custom-btn" onClick={() => handleDeleteIngredient(index)} >
                                <FontAwesomeIcon className="styleIcon" icon={faMinus} />
                            </button>
                        </div>
                    ))}
                    <br />
                    <button type="button" className="my-custom-btn" onClick={() => setIngridients([...ingridients, ''])}>
                        <FontAwesomeIcon className="styleIcon" icon={faPlus} />
                    </button>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="steps">Steps:</label>
                    {steps.map((step, index) => (
                        <div key={`step-${index}`} className="step input-group mb-3">
                            <input
                                type="text"
                                value={step || ''}
                                onChange={(event) => handleStepsChange(event, index)}
                                className="form-control"
                            />
                            <button type="button" className="my-custom-btn" onClick={() => handleDeleteStep(index)}>
                                <FontAwesomeIcon className="styleIcon" icon={faMinus} />
                            </button>
                        </div>
                    ))}
                    <br />
                    <button type="button" className="my-custom-btn" onClick={() => setSteps([...steps, ''])} >
                        <FontAwesomeIcon className="styleIcon" icon={faPlus} />
                    </button>
                </div>
                <br />
                <button type="submit" className="my-custom-btn">Update <FontAwesomeIcon className="styleIcon" icon={faLeaf} /></button>
            </form>
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
                        border: "1px solid white"
                    }}
                    icon={faHome} />
            </Link>
            <br />
        </>

    );

};

export default EditRecipie;
