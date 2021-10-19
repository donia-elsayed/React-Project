import Spinner from 'react-bootstrap/Spinner'
function Spiner() {
    return (
        <div className="mt-5">
            <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
            </Spinner>
        </div>
    )
}
export default Spiner;
