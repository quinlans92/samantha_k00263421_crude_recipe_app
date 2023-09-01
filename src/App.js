import { useState } from "react";
import NewRecipieForm from "./Components/NewRecipieForm";
import RecipieList from "./Components/RecipieList";
import EditRecipie from "./Components/EditRecipie";
import About from "./Components/About";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import './App.css';
import foodImg from './test.png';
import califlowerWings from './cauliflower.png';
import acaiBowl from './Acai Bowl.png';
import padThai from './PadThai.png';
import quiche from './Quiche.png';
import NavBar from "./Components/NavBar"; // import the Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import SingleRecipie from "./Components/SingleRecipie";
import Footer from "./Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";





const recipieData = [
  {
    id: 1,
    recipie: "gaucamole",
    image: foodImg,
    steps: ["Smash Avocado", "Chop onion", "Chop garlic", "Sprinkle Parm",
      "salt and pepper to taste", "combine all ingredients"],
    ingridients: [
      { name: "Avocado", amount: "2", measurement: 'cups' },
      { name: "Red onion", amount: "1", measurement: 'cup' },
      { name: "Salt", amount: "1", measurement: 'teaspoon' },
      { name: "Pepper", amount: "1", measurement: 'teaspoon' }]

  },
  {
    id: 2,
    recipie: "Cauliflower Wings",
    image: califlowerWings,
    ingridients: [
      { name: "Cauliflower", amount: "1", measurement: 'head' },
      { name: "Frank's Hot Sauce", amount: "1", measurement: 'head' },
      { name: "Flour", amount: "1", measurement: 'head' }
    ],
    steps: ["Bake cauliflower", "pour hot sauce", "Bake again"]
  }
  ,
  {
    id: 3,
    recipie: "Acai",
    image: acaiBowl,
    ingridients: [
      { name: "Acai Powder", amount: "1", measurement: 'head' },
      { name: "Fruit", amount: "1", measurement: 'ml' },
      { name: "Milk", amount: "1", measurement: 'ml' }
    ],
    steps: ["mix", "pour", "combine"],
  },
  {
    id: 4,
    recipie: "pad thai",
    image: padThai,
    ingridients: [
      { name: "Noodles", amount: "1", measurement: 'cup' },
      { name: "Peanut butter", amount: "1", measurement: 'ml' },
      { name: "brocolli", amount: "1", measurement: 'head' }
    ],
    steps: ["boil noodles", "sautee sauce", "season"],
  },
  {
    id: 5,
    recipie: "Quiche",
    image: quiche,
    ingridients: [
      { name: "Goats cheese", amount: "2", measurement: 'grams' },
      { name: "eggs", amount: "1", measurement: 'head' },
      { name: "Flour", amount: "1", measurement: 'head' }
    ],
    steps: ["bake", "flour", "season"],
  },

];

function App() {
  const [samsRecipie, setRecipies] = useState(recipieData);


  const addRecipie = (newRecipie) => {
    const randomID = Math.floor(Math.random() * 10000) + 1;

    newRecipie.id = randomID;

    setRecipies([...samsRecipie, newRecipie]);

    console.log("recipie is now:", samsRecipie);
  };



  const deleteRecipie = (recipieID) => {
    let updatedRecipies = samsRecipie.filter((recipie) => (recipie.id !== recipieID));
    setRecipies(updatedRecipies);
  }

  // useEffect(() => {
  //   console.log(samsRecipie);
  // }, [samsRecipie]);



  const editRecipie = (updatedRecipie) => {
    const updatedRecipies = samsRecipie.map((recipie) => {
      if (recipie.id === updatedRecipie.id) {
        return {
          ...recipie,
          recipie: updatedRecipie.recipie,
          ingridients: updatedRecipie.ingridients,
          steps: updatedRecipie.steps,
          image: updatedRecipie.image,
        };
      } else {
        return recipie;
      }
    });

    setRecipies(updatedRecipies);
  };



  return (
    <Router>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <NavBar />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <Routes>
                <Route path="/" element={
                  <>
                    <RecipieList recipies={samsRecipie} onDelete={deleteRecipie} />
                    <br />
                    <div className="text-center">
                      <Link to="/new-recipie">
                        <button className="my-custom-btn"><FontAwesomeIcon className="styleIcon" icon={faPlus} /></button>
                      </Link>
                    </div>
                    <br />
                  </>
                } />
                <Route path="/new-recipie" element={
                  <NewRecipieForm onSubmitHandler={addRecipie} />
                } />
                <Route path="/recipie/:recipieID" element={
                  <SingleRecipie recipies={samsRecipie} onDelete={deleteRecipie} />
                } />
                <Route path="/edit/:recipieID" element={
                  <EditRecipie recipies={samsRecipie} onEdit={editRecipie} />
                } />
                <Route path="/about" element={
                  <About />
                } />
              </Routes>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </Router>


  );
}


export default App;