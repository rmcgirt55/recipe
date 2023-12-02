import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router"

function Recipedisplay() {
    const { id } = useParams()
    const [recipes, setRecipes] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://django-cusine-app-0001-8571ec4d7bc6.herokuapp.com/get_recipes/`, {

                headers: {
                    //'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            })
            const resData = await response.json()
            // if data is the same, don't update
            if (resData != recipes) {
                setRecipes(resData)
                console.log('recipe data', resData)
            }
        }
        fetchData()
    }, [])

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    if (recipes === null) {
        return <h1>Loading</h1>;
    }

    return (
        <>
            <h1 className="text-center">Recipes</h1>

            <Container className="recipe-container">
                <div className="row">
                {recipes.map((recipe) => (
                    <div className="col-md-4">
                    <Card key={recipe.id}>
                        <div
                            className="recipe-box view"
                            onClick={() => handleRecipeClick(recipe)}
                        >
                            <img className="recipe-image" src={recipe.image} alt={recipe.recipename} />
                            <h4 className="recipe-title">{recipe.recipename}</h4>
                            <button>Details </button>
                        </div>

                        <Modal show={showModal} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                                
                            </Modal.Header>
                            <Modal.Body>
                                <div className="container">
                                    <div className="card row flex-row-reverse">
                                        <div className="col-lg-4 image">
                                        <img className="card-img-end img-fluid p-0" src={selectedRecipe ? selectedRecipe.image : ''} alt={selectedRecipe ? selectedRecipe.recipename  : ''} />
                                        </div>
                                        <div className="col-lg-8 card-body">
                                            <h4 className="card-title">{selectedRecipe ? selectedRecipe.description : ''}</h4>
                                            <div className="card-text">
                                                <div className="owner"><b>Recipe Owner:</b> {selectedRecipe ? selectedRecipe.name : ''}</div>
                                                <div><b>Cuisine:</b> {selectedRecipe ? selectedRecipe.cuisines : ''}</div>
                                                <div><b>Difficulty</b> {selectedRecipe ? selectedRecipe.difficulty : ''}</div>
                                                <div><b>Ingredients:</b> {selectedRecipe ? selectedRecipe.ingredients : ''}</div>
                                                <div><b>Prep Time:</b> {selectedRecipe ? selectedRecipe.preptime : ''}</div>
                                                <div><b>Cook Time:</b> {selectedRecipe ? selectedRecipe.cooktime : ''}</div>
                                                <div><b>Ingredients:</b> {selectedRecipe ? selectedRecipe.ingredients : ''}</div>
                                                <div><b>Directions: </b> {selectedRecipe ? selectedRecipe.directions : ''}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </Card>
                    </div>
                ))}
                </div>
            </Container>
        </>
    );
}

export default Recipedisplay;
