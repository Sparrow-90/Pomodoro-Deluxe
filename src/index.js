import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
import Timer from "./Timer";
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';

const App = () =>{
    const [showSettings, setShowSettings] = useState(true);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);

    return(
        <main className="pt-12 max-w-80 mx-auto text-center">
            <SettingsContext.Provider value={{
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBreakMinutes,
            }}>
            {showSettings ? <Settings/> : <Timer/> }
            </SettingsContext.Provider>
        </main>
    )
};

root.render(<App />);