import Notes from "./components/Notes";
import "./styles/global.css";
import "./styles/app.css";
import { useEffect, useState } from "react";
import api from "./services/api.js";
import RadioButton from "./components/RadioButton";

function App() {
    const [allNotes, setAllNotes] = useState(Array);
    const [selectedValue, setSelectedValue] = useState("all");
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");

    async function getAllNotes() {
        const response = await api.get("/annotations");
        setAllNotes(response.data);
    }

    async function loadNotes(option) {
        const params = { priority: option };
        const response = await api.get("priorities", { params });

        if (response) {
            setAllNotes(response.data);
        }
    }

    async function handleDelete(id) {
        const deletedNote = await api.delete(`/annotations/${id}`);

        if (deletedNote)
            setAllNotes(allNotes.filter((note) => note._id !== id));
    }

    async function handleChangePriority(id) {
        const note = await api.put(`/priorities/${id}`);

        if (note && selectedValue !== "all") loadNotes(selectedValue);
        else if (note) {
            getAllNotes();
        }
    }

    function handleChange(e) {
        setSelectedValue(e.value);

        if (e.checked && e.value !== "all") loadNotes(e.value);
        else getAllNotes();
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post("/annotations", {
            title,
            notes,
            priority: false,
        });
        if (selectedValue !== "all") {
            getAllNotes();
            setSelectedValue("all");
        }
        setTitle("");
        setNotes("");
        setAllNotes([...allNotes, response.data]);
    }

    useEffect(() => {
        function enableSubmitButton() {
            let btn = document.querySelector("#btn_submit");
            btn.style.background = "#FFD3CA";
            if (title && notes) {
                btn.style.background = "#E88F7A";
            }
        }
        enableSubmitButton();
    }, [title, notes]);

    useEffect(() => {
        getAllNotes();
    }, []);

    return (
        <div id="app">
            <aside>
                <strong>Caderno de Notas</strong>
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <label htmlFor="title">Título da Anotação.</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength="30"
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="nota">Anotações.</label>
                        <textarea
                            required
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <button id="btn_submit" type="submit">
                        Salvar
                    </button>
                </form>
                <RadioButton
                    handleChange={handleChange}
                    selectedValue={selectedValue}
                />
            </aside>
            <main>
                <ul>
                    {allNotes.map((data, index) => (
                        <Notes
                            data={data}
                            handleDelete={handleDelete}
                            handleChangePriority={handleChangePriority}
                            key={index}
                        />
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
