import { useRef, useState } from "react"

function LearnRef() {

    const inputRef = useRef(null);
    const [name, setName] = useState("Mangalam Kallo")

    const handleOnClick = () => {
        inputRef.current.focus();
        setName(inputRef.current.value)
        console.log(inputRef.current.value);
    }
    return(
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder="Example" ref={inputRef}/>
            <button onClick={handleOnClick}>Change Name</button>
        </div>
    )
}

export default LearnRef;