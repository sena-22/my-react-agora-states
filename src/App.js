import "./App.css";
import Discussions from "./Components/Discussions";
//import Form from "./Components/Form";

function App() {
  return (
    <>
      <h1 className="neonText">
        My Agora States
        <i className="fa-regular fa-star blink"></i>
      </h1>
      <Discussions />
    </>
  );
}

export default App;
