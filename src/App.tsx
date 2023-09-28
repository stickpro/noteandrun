import "./App.css";
import DefaultLayout from "./layout/default/";
import Sidebar from "./components/navigation/Sidebar";

function App() {
    return (
        <DefaultLayout>
            <Sidebar />
            <div></div>
        </DefaultLayout>
    );
}

export default App;
