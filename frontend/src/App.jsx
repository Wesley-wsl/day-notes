import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import "./styles/global.css";
import "./styles/app.css";
import { useEffect, useState } from "react";
import api from "./services/api.js";

function App() {
    const [allNotes, setAllNotes] = useState(Array);

    useEffect(() => {
        async function getAllNotes() {
            const response = await api.get("/annotations");
            setAllNotes(response.data);
        }

        getAllNotes();
    }, []);

    return (
        <div id="app">
            <Sidebar allNotes={allNotes} setAllNotes={setAllNotes} />
            <main>
                <ul>
                    {allNotes.map((data, index) => (
                        <Notes data={data} key={index} />
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
