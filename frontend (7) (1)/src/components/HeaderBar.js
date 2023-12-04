import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";

function HeaderBar() {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(CurrentUser);
  console.log(currentUser)
    const token = localStorage.getItem("token");
    const user_interface = () =>
    {
        //if token then logout button else login and singup button 
        if(token)
        {
            return(
                <button variant="outline-success" onClick={logout}>Logout</button>
            )
        }
        else
        {
            return(
                <>
                <button variant="outline-success" onClick={() => navigate("/sign-up")}>Sign Up</button>
                <button variant="outline-success" onClick={() => navigate("/login")}>Login</button>
                </>
            )
        }
    }

  function logout(e) {
    localStorage.removeItem("token");
    setCurrentUser(null)
    navigate("/");
  }

  // this collection of html should be inside of an unordered/ordered list
  let loginActions =  user_interface();


  if (currentUser) {
    loginActions = (
      <>
     
        <div>
        <button className="login" onClick={logout}>Logout</button>
        <h6>Logged in as {currentUser.username}</h6>
        </div>
        </>
    );
  }
  
  return (

    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Brand className="text-wrap"><b>"EAT WHATEVER YOU WANT, AND IF ANYONE TRIES TO LECTURE YOU ABOUT YOUR WEIGHT, EAT THEM TOO"</b></Navbar.Brand>
        {loginActions}
      </Container>
    </Navbar>
  );
}

export default HeaderBar;