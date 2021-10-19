import Buttons from '../counter/button'
import { useState } from "react";
function Counter() {
    let [count, setCount] = useState(0);
    return (
        <div className="border w-50 m-auto p-5 mt-5">
            <h2>{count}</h2>
            <Buttons count={count} setCount={setCount}></Buttons>
        </div>
    )
}
export default Counter;