import Buttons from '../counter/button'
import { useSelector } from "react-redux";
function Counter() {
    const countState = useSelector(state => state.count);
    return (
        <div className="border w-50 m-auto p-5 mt-5">
            <h2>{countState}</h2>
            <Buttons/>
        </div>
    )
}
export default Counter;