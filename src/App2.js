import { useState, useEffect } from 'react';

function Hello() {
    useEffect(() => {
        console.log("im here!");
        return () => console.log("im leaving!");
    },[])
    return <h1>Hello</h1>
}

function App2() {
    const [showing, SetShowing] = useState(false);
    const onClick = () => SetShowing((prev)=>!prev);

    return <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
}

export default App2;
