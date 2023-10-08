import axios from "axios";
import { useEffect, useState } from "react";

function LearnEffect () {

    const [data, setData] = useState("");


    useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email)
            })
    }, []);

    return(
        <div>Hello World {data}</div>

    )
}

export default LearnEffect;