import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
import Timer from "./Timer";

const App = () =>{
    return(
        <main className="pt-12 max-w-80 mx-auto text-center">
            <Timer/>
        </main>
    )
};

root.render(<App />);