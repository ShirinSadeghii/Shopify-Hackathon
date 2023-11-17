import './Buttons.scss';
import { Link } from 'react-router-dom';

function Buttons({ currentPage }) {

    let backLink, forwardLink;

    switch(currentPage) {
        case 'match2':
            backLink = '/';
            forwardLink = '/match3';
            break;
        case 'match3':
            backLink = '/match2';
            forwardLink = '/matches';
            break;
        
        default:
            backLink = '/';
            forwardLink = '/match2';
    }

    return (
        <div className="container">
            <Link to={backLink}>
                <button className="container__btn">Back</button>
            </Link>
            <Link to={forwardLink}>
                <button className="container__btn container__btn--green">Continue</button>
            </Link>
        </div>
    )
}

export default Buttons 