// import ClassHello from "./components/Lab1/ClassHello/ClassHello";
// import { FunHello } from "./components/Lab1/FunHello/FunHello";
import "./App.css";
import FunctionalProps from "./components/Lab2/FunctionalProps";
import ClassProps from "./components/Lab2/ClassProps";
import Login from "./components/Lab2/Login";
import ProductQuantity from "./components/Lab2/ProductQuantity";

function App() {
  const bio = {
    name: "Mohamed Saeed",
    age: 24,
    track: "IOT",
    message: "this is lab2 from react course",
  };
  const tracks = ["DataBase", "Linux"];

  return (
    <div className="App">
      {/* ============ lab 1 =================== */}
      {/* <ClassHello />
      <FunHello /> */}
      {/* ============ lab 2 ============= */}
      <FunctionalProps bio={bio}>
        <span>this span is child from functional components</span>
      </FunctionalProps>
      <ClassProps tracks={tracks}>
        <span>this span is child from ClassProps components</span>
      </ClassProps>
      <Login />
      <ProductQuantity />
    </div>
  );
}

export default App;
