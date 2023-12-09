import { useState } from "react";
import ShowMem from "./components/SowMem";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [info, setInfo] = useState([]);

  const getUserInfo = (prop) => {
    setInfo([...info, prop]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <Form getUserInfo={getUserInfo} />
          {info.length === 0 ? (
            <p className="no-user">There was no user in your app.</p>
          ) : (
            info.map((item, index) => {
              return <ShowMem key={index} item={item} />;
            })
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
