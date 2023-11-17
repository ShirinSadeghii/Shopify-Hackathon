import NavBar from '../../components/NavBar/NavBar';
import MessageForm from '../../components/MessageForm/MessageForm';
import Buttons from '../../components/Buttons/Buttons';

function MentorPage3() {
    return (
        <div>
             <NavBar/>
             <div className='mentor'>
                <MessageForm />
                <Buttons />
             </div>
        </div>
       
    )

}

export default MentorPage3