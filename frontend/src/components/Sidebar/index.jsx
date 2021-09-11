import { useEffect, useState } from "react";
import api from "../../services/api.js";
import RadioButton from "../RadioButton/index.jsx";
import "./styles.css";

function SideBar({setAllNotes, allNotes}) {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/annotations', {
            title,
            notes,
            priority: false
        });

        setTitle('')
        setNotes('')
        setAllNotes([...allNotes, response.data])
    }

    useEffect(() => {
        function enableSubmitButton() {
            let btn = document.querySelector('#btn_submit');
            btn.style.background = '#FFD3CA'
            if (title && notes) {
                btn.style.background = '#E88F7A'
            }
        }
        enableSubmitButton()
    }, [title, notes])

    return (
        <aside>
            <strong>Caderno de Notas</strong>
            <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <label htmlFor="title">Título da Anotação.</label>
                    <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="input-block">
                    <label htmlFor="nota">Anotações.</label>
                    <textarea required value={notes} onChange={e => setNotes(e.target.value)} />
                </div>
                <button id="btn_submit" type="submit">Salvar</button>
            </form>
            <RadioButton />
        </aside>
    );
}

export default SideBar;
