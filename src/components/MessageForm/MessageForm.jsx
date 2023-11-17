import './MessageForm.scss';

function MessageForm() {
    return(
        <div className='message'>
            <div className='message__box'>
                <span >Step 3</span>
            </div>
            <h2 className='message__title'>Message to your mentors</h2>
            <form className='message__form'>
                <textarea className="message__text" name='text' placeholder='Anything you would like to ask?'></textarea>
            </form>
            <h2 className='message__title'>Send a message</h2>
        
            <div className='message__container'>
                <p className='message__default-comments'>Sample greeting, intro 1</p>
            </div>
            <div className='message__container'>
                <p className='message__default-comments'>Sample greeting, intro 2</p>
            </div>
            <div className='message__container'>
                <p className='message__default-comments'>Sample greeting, intro 3</p>
            </div>
        </div> 
    )
}

export default MessageForm