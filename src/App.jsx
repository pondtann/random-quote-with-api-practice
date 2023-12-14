import "./App.css";
import ContainerBox from "./components/ContainerBox";
import QuoteGenerator from "./components/QuoteGenerator";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold my-5">Random Quote From API</h1>
      <ContainerBox>
        <QuoteGenerator />
      </ContainerBox>
    </>
  );
}

export default App;
