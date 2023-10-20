import "./App.css";
import Component1 from "./components/Lab3/ContextComponents/Component1";
import PostsWrapper from "./components/Lab3/Posts/PostsWrapper";
import Products from "./components/Lab3/Products/Products";
import FormWrapper from "./components/Lab3/UserForm/FormWrapper";

function App() {
  return (
    <>
      <Products />
      <FormWrapper/>
      <Component1/>
      <PostsWrapper/>
    </>
  );
}

export default App;
