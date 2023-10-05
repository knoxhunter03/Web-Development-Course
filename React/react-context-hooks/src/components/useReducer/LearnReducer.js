import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
                showtext: state.showtext
            };
        
        case "toggleShowText":
            return {
                count: state.count,
                showtext: !state.showtext
            };
        
        default:
            return state
    };
}


const LearnReducer = () => {

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showtext: true
    });

    return(
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({type: "INCREMENT"});
                    dispatch({type: "toggleShowText"});
                }}
            >
                Click Here
            </button>
            {state.showtext && <p>This is a text</p>}
        </div>
    )
}





export default LearnReducer;