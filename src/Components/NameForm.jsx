import { useState } from "react"

const NameForm = (props) => {
    const [input, setInput] = useState("");

    const _handleChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <form onSubmit={(event) => props.handleSubmit(event, input)}>
            <input type="text" onChange={_handleChange} />
            <button type="submit">Change Name</button>
        </form>
    )
}

export default NameForm;