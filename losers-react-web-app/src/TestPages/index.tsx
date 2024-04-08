import { useState } from "react";

function Test() {

    const [hello, setHello] = useState(false);
    var [count, setCount] = useState(0);


    const makeAHello = () => {
        return <h1>hhhhhhhhhhhhh</h1>
    };

    return (
        <>
            <h1>Helllllo!</h1>
            <h2>you</h2>
            <button className="button" onClick={
                () => {setHello(!hello); setCount(count => count + 1)}}>Click me</button>
            {hello && makeAHello()}
            <label>Count :{count}</label>

        </>

    );
}

export default Test;