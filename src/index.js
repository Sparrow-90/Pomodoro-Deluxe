import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
import Timer from "./Timer";
import Settings from './Settings';
import { useState } from 'react';

const App = () =>{
    const [showSettings, setShowSettings] = useState(true)

    return(
        <main className="pt-12 max-w-80 mx-auto text-center">
            {showSettings ? <Settings/> : <Timer/> }
        </main>
    )
};

root.render(<App />);