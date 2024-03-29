import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["new york", "san francisco", "brisbane", "sydney", "melbourne"];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }


  return (
    <>
      <div>
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
        <Alert>Hello<span>World</span></Alert>
        </div>
    </>
  );
}

export default App;
