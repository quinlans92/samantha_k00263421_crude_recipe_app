import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faHome, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const NewRecipieForm = ({ onSubmitHandler }) => {
    const navigate = useNavigate();
    const [recipie, setRecipie] = useState("");
    const [ingridients, setIngridients] = useState([{ measurement: "", name: "", amount: "" }]);

    const [steps, setSteps] = useState([{ description: "" }]);
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recipie) {
            alert("Please add a name");
            return;
        }
        else {
            let newRecipie = {
                recipie: recipie,
                ingridients: ingridients.map((ingridient) => ({
                    name: ingridient.name,
                    amount: ingridient.amount,
                    measurement: ingridient.measurement,
                })),
                steps: steps.map((step) => step.description),
                image: image,
            };
            onSubmitHandler(newRecipie);
            navigate("/");
        }
    };

    const handleAddIngridient = () => {
        setIngridients([...ingridients, { measurement: "", name: "", amount: "" }]);
    };

    const handleRemoveIngridient = (index) => {
        const newIngridients = [...ingridients];
        newIngridients.splice(index, 1);
        setIngridients(newIngridients);
    };

    const handleAddStep = () => {
        setSteps([...steps, { description: "" }]);
    };

    const handleRemoveStep = (index) => {
        const newSteps = [...steps];
        newSteps.splice(index, 1);
        setSteps(newSteps);
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



    // const handleBack = () => {
    //     navigate("/");
    // };

    return (
        <>
            <form
                style={{
                    border: "1px solid white",
                    borderRadius: "9px",
                    padding: "10px",
                }}
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label
                        style={{ textTransform: "uppercase", color: "white" }}
                        htmlFor="recipeTitle"
                    >
                        Recipe:
                    </label>
                    <input
                        type="text"
                        id="recipeTitle"
                        name="recipeTitle"
                        value={recipie}
                        onChange={(e) => setRecipie(e.target.value)}
                        className="form-control"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="form-group">
                    <label
                        style={{ textTransform: "uppercase", color: "white" }}
                        htmlFor="image"
                    >
                        Image:
                    </label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="form-control"
                        src={image}
                        alt="Recipe"
                        style={{ maxWidth: "100%", marginTop: "10px" }}
                    />
                    {image && (
                        <img
                            src={image}
                            alt="Recipe"
                            style={{ maxWidth: "100%", marginTop: "10px" }}
                        />
                    )}
                </div>
                <div className="form-group">
                    <label
                        style={{ textTransform: "uppercase", color: "white" }}
                        htmlFor="ingredients"
                    >
                        Ingredients:
                    </label>
                    {ingridients.map((ingridient, index) => (
                        <div key={index} className="input-group mb-2">
                            <input
                                type="text"
                                value={ingridient.amount || ''}
                                onChange={(e) => {
                                    const newIngridients = [...ingridients];
                                    newIngridients[index].amount = e.target.value;
                                    setIngridients(newIngridients);
                                }}
                                className="form-control"
                                placeholder="Enter Amount"
                            />
                            <select
                                value={ingridient.measurement || ''}
                                onChange={(e) => {
                                    const newIngridients = [...ingridients];
                                    newIngridients[index].measurement = e.target.value;
                                    setIngridients(newIngridients);
                                }}
                                className="form-control"
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
                                value={ingridient.name || ''}
                                onChange={(e) => {
                                    const newIngridients = [...ingridients];
                                    newIngridients[index].name = e.target.value;
                                    setIngridients(newIngridients);
                                }}
                                className="form-control"
                                placeholder="Enter Ingredient"
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    onClick={() => handleRemoveIngridient(index)}
                                    className="my-custom-btn"
                                >
                                    <FontAwesomeIcon className="styleIcon" icon={faMinus} />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={handleAddIngridient}
                            className="my-custom-btn"
                        >
                            <FontAwesomeIcon className="styleIcon" icon={faPlus} />
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <label style={{ textTransform: 'uppercase', color: 'white' }}>Steps:</label>
                    {steps.map((step, index) => (
                        <div key={index} className="input-group mb-2">
                            <input
                                type="text"
                                value={step.description}
                                onChange={(e) => {
                                    const newSteps = [...steps];
                                    newSteps[index].description = e.target.value;
                                    setSteps(newSteps);
                                }}
                                className="form-control"
                                placeholder="Enter Step"
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    onClick={() => handleRemoveStep(index)}
                                    className="my-custom-btn"
                                >
                                    <FontAwesomeIcon className="styleIcon" icon={faMinus} />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={handleAddStep}
                            className="my-custom-btn"
                        >
                            <FontAwesomeIcon className="styleIcon" icon={faPlus} />
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    <br />
                    <button type="submit" className="my-custom-btn">Add <FontAwesomeIcon className="styleIcon" icon={faLeaf} /></button>
                    <br />
                </div>
            </form>
            <div className="text-center">
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
                <br />
            </div>
            <br />
        </>
    )



};

export default NewRecipieForm;

