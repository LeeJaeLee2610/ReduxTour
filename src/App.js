import { useSelector } from "react-redux";
import Card from "./components/Card";

function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log("App ~ GlobalOptions", globalOptions);
  return (
    <div>
      <Card></Card>
      <button>Toogle dark mode</button>
    </div>
  );
}

export default App;
