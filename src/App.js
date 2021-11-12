import React from "react";
import Form from "./components/Form";
import "./App.css";
const App = () => {
  return (
    <div
    style={{
      backgroundImage: "url(/maldives.jpg)",
      height: "100%",
      backgroundRepeat: "no-repeat"
    }}>
      <Form></Form>
    </div>
  );
};
export default App;