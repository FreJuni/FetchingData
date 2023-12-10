import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async (URL) => {
    const response = await fetch(URL);
    const Data = await response.json();
    setData([...data, Data]);
  };

  // useEffect(() => {
  //   fetchData(url);
  // }, []);

  console.log(data);

  const handle = (e) => {
    e.preventDefault();

    if (value < 1 || value > 200) {
      alert("You enter worong number sorry.");
      return;
    }

    fetchData(`${url}/${value}`);
    setValue(0);
    console.log("helo");
  };

  return (
    <section className="section-center">
      <div className="section-con">
        <h2>Text here number between 1 to 200.</h2>
        <form onSubmit={handle}>
          <input
            type="number"
            name="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button className="btn">Enter </button>
        </form>
        <div className="testing-con">
          {data &&
            data.map((item, index) => {
              return (
                <div key={item.id} className="item-con">
                  <h1>Produces : {index + 1}</h1>
                  <h3>Title : {item.title}</h3>
                  <p>Title ID : {item.id}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default App;
