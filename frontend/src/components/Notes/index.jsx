import {AiTwotoneDelete, AiOutlineExclamationCircle} from 'react-icons/ai'
import "./styles.css";

export default function Notes({data}) {
    return (
        <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
            <div>
                <strong>{data.title}</strong>
                <div><AiTwotoneDelete size='20'/></div>
            </div>
            <textarea defaultValue={data.notes} />
            <span><AiOutlineExclamationCircle size='20' /></span>
        </li>
    );
}
