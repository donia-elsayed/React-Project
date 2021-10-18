
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
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
        </div>
    )
}
export default Buttons;