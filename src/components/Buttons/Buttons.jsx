import './Buttons.scss';
import { Link } from 'react-router-dom';

function Buttons() {

    return (
        <div className="container">
            <Link to="/match2">
                <button className="container__btn">Back</button>
            </Link>
            <Link to="/matches">
                <button className="container__btn container__btn--green">Continue</button>
            </Link>
        </div>
    )
}

export default Buttons 