import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import "./styles.css";

const CustomRadio = withStyles({
    root: {
        color: "#FFD3CA",
        "&$checked": {
            color: "#E88F7A",
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButton({ handleChange, selectedValue }) {
    return (
        <>
            <div className="radioOptions">
                <div>
                    {" "}
                    <CustomRadio
                        checked={selectedValue === "all"}
                        onChange={(e) => handleChange(e.target)}
                        value="all"
                    />{" "}
                    <span>Todos</span>
                </div>
                <div>
                    {" "}
                    <CustomRadio
                        checked={selectedValue === "true"}
                        onChange={(e) => handleChange(e.target)}
                        value={true}
                    />{" "}
                    <span>Prioridade</span>
                </div>
                <div>
                    {" "}
                    <CustomRadio
                        checked={selectedValue === "false"}
                        onChange={(e) => handleChange(e.target)}
                        value={false}
                    />{" "}
                    <span>Normal</span>
                </div>
            </div>
        </>
    );
}
