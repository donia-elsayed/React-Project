import './counter.css'
function Buttons(props) {
    const count = props.count;
    const setCount = props.setCount;
    const increaseCounter = () => {
        setCount(count + 1);
    }
    const decreaseCounter = () => {
        setCount(count -1);    
  }
    return (
        <div>
            <button className="btn btn-success me-3 fs-3" onClick={increaseCounter}>+</button>
            <button className="btn btn-danger fs-3" onClick={decreaseCounter}>-</button>
        </div>
    )
}
export default Buttons;