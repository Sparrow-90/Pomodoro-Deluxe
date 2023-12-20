import ReactDOM from "react-dom";
import Test from "./Test";

const App = () =>{
    return(
        <>
        <h1>App Component</h1>
        <Test />
        </>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));