import { incrementAction, decrementAction } from "../redux/count";
import { useDispatch } from 'react-redux';
import './counter.css'
function Buttons() {
    const countDispatch = useDispatch();
    const increaseCounter = () => {
        countDispatch(incrementAction(1));
    }
    const decreaseCounter = () => {
           countDispatch(decrementAction(1));
  }
    return (
        <div>
            <button className="btn btn-success me-3 fs-3" onClick={increaseCounter}>+</button>
            <button className="btn btn-danger fs-3" onClick={decreaseCounter}>-</button>
        </div>
    )
}
export default Buttons;