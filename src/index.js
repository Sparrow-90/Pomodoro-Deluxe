import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
import Timer from "./Timer";
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';

const App = () =>{
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);

    return(
        <main className="pt-12 max-w-80 mx-auto text-center">
            <h1 className='font-rubik text-4xl'>Pomodoro</h1>
            <p className='font-pacifico'>deluxe</p>
            <SettingsContext.Provider value={{
                showSettings,
                setShowSettings,
                workMinutes,
                setWorkMinutes,
                breakMinutes,
                setBreakMinutes,
            }}>
            {showSettings ? <Settings/> : <Timer/> }
            </SettingsContext.Provider>
        </main>
    )
};

root.render(<App />);