import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function ViteLogo() {
    return (
        <>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
        </>
    );
}

function ReactLogo() {
    return (
        <>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </>
    );
}

function App() {
    const [count, setCount] = useState(0);
    const [isten, setIsten] = useState(false);
    const [even, setEven] = useState(null);

    useEffect(() => {
        if (count === 10) {
            setIsten(true);
        } else {
            setIsten(false);
        }
    }, [count]);

    useEffect(() => {
        if (count % 2 === 0) {
            setEven(true);
        } else {
            setEven(false);
        }
    }, [count]);

    return (
        <>
            <h3>Kelompok 9</h3>
            {even === true ? <ViteLogo /> : <ReactLogo />}
            <div>
                {isten && (
                    <p style={{ color: "red" }}>Angka 10 telah tercapai</p>
                )}
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    +
                </button>
                <h3 style={{ marginInline: "30px" }}>{count}</h3>
                <button onClick={() => setCount((count) => count - 1)}>
                    -
                </button>
            </div>
        </>
    );
}

export default App;
