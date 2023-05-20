import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = Number(count);
    if (amount < 0) {
      amount = 0;
    }
    if (amount > 4) {
      amount = 4;
    }
    /* console.log(typeof amount); */
    setText(data.slice(0, amount));
  };

  return (
    <div className="section-center">
      <h4>ساخت یک لورم به آسانی!</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label>تعداد پاراگراف برای ساخت لورم:</label>
        <br />
        <input
          type="number"
          name="total"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button type="submit">ساختن</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </div>
  );
}

export default App;
