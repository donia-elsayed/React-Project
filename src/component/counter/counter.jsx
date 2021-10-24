import Buttons from '../counter/button'
import { useSelector } from "react-redux";
function Counter() {
    const countState = useSelector(state => state.counter.count);
    return (
        <div className="border-2 w-50 m-auto p-5 mt-5 bg-light">
            <h2>{countState}</h2>
            <Buttons/>
        </div>
    )
}
export default Counter;