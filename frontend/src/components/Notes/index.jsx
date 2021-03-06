import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import "./styles.css";
import { useState } from "react";
import api from "../../services/api";

export default function Notes({ data, handleDelete, handleChangePriority }) {
    const [changedNote, setChangedNote] = useState("");

    async function handleSave(e, notes) {
        e.style.cursor = "default";
        e.style.boxShadow = "none";
        if (changedNote && changedNote !== notes) {
            await api.put(`/contents/${data._id}`, {
                notes: changedNote,
            });
        }
    }

    function handleEdit(e, priority) {
        e.style.cursor = "text";
        e.style.borderRadius = "5px";

        if (priority) e.style.boxShadow = "0 0 5px white";
        if (!priority) e.style.boxShadow = "0 0 5px gray";
    }

    return (
        <li
            className={
                data.priority ? "notepad-infos-priority" : "notepad-infos"
            }
        >
            <div>
                <strong>{data.title}</strong>
                <div>
                    <AiTwotoneDelete
                        size="20"
                        onClick={() => handleDelete(data._id)}
                    />
                </div>
            </div>
            <textarea
                defaultValue={data.notes}
                onChange={(e) => setChangedNote(e.target.value)}
                onClick={(e) => handleEdit(e.target, data.priority)}
                onBlur={(e) => handleSave(e.target, data.notes)}
            />
            <span>
                <AiOutlineExclamationCircle
                    size="20"
                    onClick={() => handleChangePriority(data._id)}
                />
            </span>
        </li>
    );
}
