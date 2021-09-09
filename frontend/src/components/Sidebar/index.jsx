import "./styles.css";

function SideBar() {
    return (
        <aside>
            <strong>Caderno de Notas</strong>
            <form>
                <div className="input-block">
                    <label htmlFor="title">Título da Anotação.</label>
                    <input type="text" />
                </div>

                <div className="input-block">
                    <label htmlFor="nota">Anotações.</label>
                    <textarea></textarea>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </aside>
    );
}

export default SideBar;
