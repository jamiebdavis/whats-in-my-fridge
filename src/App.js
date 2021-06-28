import Navbar from "./components/navbar/navbar";
import Routes from "./Routes";

function App() {
    return (
        <div className="m-2">
            <Navbar />
            <Routes />
        </div>
    );
}

export default App;

const Title = () => <h1 className="text-red-200	">What's in my fridge</h1>;
