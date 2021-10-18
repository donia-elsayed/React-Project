import Buttons from '../counter/button'
import { useState } from "react";
function Counter() {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter:{count}</h2>
            <Buttons count={count} setCount={setCount}></Buttons>
        </div>
    )
}
export default Counter;