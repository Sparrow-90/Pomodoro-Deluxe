import ReactDOM from "react-dom";
import Timer from "./Timer";

const App = () =>{
    return(
        <main className="pt-12 max-w-80 mx-auto text-center">
            <Timer/>
        </main>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));