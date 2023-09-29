import "./App.css";
import DefaultLayout from "./layout/default/";
import Sidebar from "./components/navigation/Sidebar";
import NoteList from "./components/navigation/NoteList";
import EditorLayout from "./components/EditorLayout";
function App() {
    return (
        <DefaultLayout>
            <Sidebar />
            <NoteList />
            <EditorLayout />
        </DefaultLayout>
    );
}

export default App;
