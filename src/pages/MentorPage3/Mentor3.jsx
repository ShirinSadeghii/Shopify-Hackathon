import NavBar from '../../components/NavBar/NavBar';

function MentorPage3() {
    return (
        <div>
             <NavBar/>
             <div className='message'>
                <span className='message__box'>Step 3</span>
                <h2 className='message__title'>Messae to your mentors</h2>
                <form className='message__form'>
                    <textarea name='text'>Anything you'd like to ask?</textarea>
                </form>
            </div>
            
        </div>
       
    )

}

export default MentorPage3