import { useParams } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import SignUp from "./Signup";
import "../styles/App.css";

function Home() {
  const { name } = useParams();

  return (
    <div>
      {name === "home" ? (
        <HomePage />
      ) : name === "sign-up" ? (
        <SignUp />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Home;