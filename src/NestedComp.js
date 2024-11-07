import './App.css';
import {MyButton} from "./App";

function MyNestedComp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
        </div>
    );
}

export default MyNestedComp;