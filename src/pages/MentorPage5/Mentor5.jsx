import '../MentorPage5/Mentor5.scss'
import Icon1 from '../../assets/Icons/call-24.svg'
import Icon2 from '../../assets/Icons/calendar-24.svg'
import Icon3 from '../../assets/Icons/send-24.svg'
import Icon4 from '../../assets/Icons/ShipApp_icon.png'
import Icon5 from '../../assets/Icons/itay.jpg'
import Icon6 from '../../assets/Icons/brauer.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function MentorPage5() {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const sendMessage = (event) => {
        event.preventDefault();
      if (newMessage.trim() !== '') {
        setMessages([
          ...messages,
          { text: newMessage, type: 'user' },
        //   { text: 'This is a sample response.', type: 'other' } 
        ]);

        setTimeout(() => {
            setMessages([...messages,    { text: newMessage, type: 'user' }, { text: 'This is a sample response.', type: 'other' }]);
          }, 2500);
  
        setNewMessage('');
      }
}
    return (
    <>
        <div className='mentorchat'>
            <div className='mentorchat__heading'>
                <h1 className='mentorchat__h1'>Pedro</h1>
                <div className='mentorchat__icons'>
                    <img className='mentorchat__icon1' src={Icon1} alt="Icon1" />
                    <img className='mentorchat__icon2' src={Icon2} alt="Icon2" />
                </div>
            </div>

            <div className='mentorchat__categories'>
                <span className='mentorchat__category'>Shipping</span>
                <span className='mentorchat__category'>Logistics</span>
                <span className='mentorchat__category'>Legal</span>
                <span className='mentorchat__category'>Mentorship</span>
                <span className='mentorchat__category'>Storefront Setup</span>
            </div>
        

            <div className='mentorchat__chat'>
                <div className='mentorchat__item'>
                    <div className='mentorchat__avatar'></div>
                    <div className='mentorchat__comment'>
                        <p className='mentorchat__message'>What do you think you’re struggling with the most right now?</p>
                        <span className='mentorchat__time'>sent yesterday</span>
                    </div>
                </div>

                <div className='mentorchat__item2'>
                    <div className='mentorchat__comment'>
                        <p className='mentorchat__message2'>Hey Pedro, thank you for accepting my chat request  🙏 Right now I’m struggling with [problem x, y, z]. Any advice?</p>
                        <span className='mentorchat__time'>sent 2 hours ago</span>
                    </div>
                    <div className='mentorchat__avatar'></div>
                </div>

                <div className='mentorchat__item'>
                    <div className='mentorchat__avatar'></div>
                    <div className='mentorchat__comment'>
                        <p className='mentorchat__message'>I have lots of experience here. Happy to help.</p>
                    </div>
                </div>

                <div className="chat-messages">
                    {messages.map((message, index) => (
                    <div className='mentorchat__item'>
                        {message.type === 'user' && <div className='mentorchat__avatar'></div>}
                        <div className='mentorchat__comment'>
                            <p key={index} className='mentorchat__message2'>{message.text}</p>
                        </div>
                        {message.type === 'other' && <div className='mentorchat__avatar'></div>}

                </div>
                ))}
      </div>


            </div>

            <div className='mentorchat__cards'>
                <div className='mentorchat__card'>
                    <span className='mentorchat__cardname'>Shipping App</span>
                    <div className='mentorchat__image'>
                        <img className='mentorchat__icon4' src={Icon4} alt="Icon4" />
                    </div>
                </div>

                <div className='mentorchat__card'>
                    <span className='mentorchat__cardname'>Slashcard</span>
                    <div className='mentorchat__image'>
                        <img className='mentorchat__icon5' src={Icon5} alt="Icon5" />
                    </div>
                </div>


                <div className='mentorchat__card'>
                    <span className='mentorchat__cardname'>Slashcard</span>
                    <div className='mentorchat__image'>
                    <img className='mentorchat__icon6' src={Icon6} alt="Icon6" />
                    </div>
                </div>
            </div>

            <form className='mentorchat__form'>
                <div className='mentorchat__newmessage'>
                    <input className='mentorchat__input' 
                    type="text" 
                    id='name' 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."/>
                </div>

                <div className='mentorchat__button'>
                    <button className='mentorchat__btn' onClick={sendMessage}>
                        <img className='mentorchat__icon3' src={Icon3} alt="icon3" />
                    </button>
                </div>
            </form>
        </div>
    </>
    )
}

export default MentorPage5