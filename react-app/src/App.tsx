import ListGroup from "./components/ListGroup";
import { Fragment } from "react";
function App() {
  let items = ["new york", "san francisco", "brisbane", "sydney", "melbourne"];

  items = [];

  if (items.length === 0) return <p>No Item Found!</p>;

  items.map((item) => <li>{item}</li>);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
