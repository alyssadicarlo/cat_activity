import { useState } from "react"

const NameForm = (props) => {
    const [input, setInput] = useState("");

    const _handleChange = (event) => {
        setInput(event.target.value);
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(input);
        setInput("");
    }

    return (
        <form onSubmit={(event) => _handleSubmit(event)}>
            <input type="text" onChange={_handleChange} value={input} />
            <button type="submit">Change Name</button>
        </form>
    )
}

export default NameForm;