import "./styles.css";

export default function Notes({data}) {
    return (
        <li className="notepad-infos">
            <div>
                <strong>{data.title}</strong>
                <div>x</div>
            </div>
            <textarea defaultValue={data.notes} />
            <span></span>
        </li>
    );
}
