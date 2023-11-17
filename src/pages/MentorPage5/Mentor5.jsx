import '../MentorPage5/Mentor5.scss'
import Icon1 from '../../assets/Icons/call-24.svg'
import Icon2 from '../../assets/Icons/calendar-24.svg'
import Icon3 from '../../assets/Icons/send-24.svg'

function MentorPage5() {
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
                        <p className='mentorchat__message2'>I have lots of experience here. Happy to help.</p>
                    </div>
                </div>
            </div>

            <div className='mentorchat__cards'>
                <div className='mentorchat__card'>
                    <span className='mentorchat__cardname'>Shipping App</span>
                    <div className='mentorchat__image'></div>
                </div>

                <div className='mentorchat__card'>
                    <span className='mentorchat__cardname'>Slashcard</span>
                    <div className='mentorchat__image'></div>
                </div>


                <div className='mentorchat__card'>
                    <span className='mentorchat__cardname'>Slashcard</span>
                    <div className='mentorchat__image'></div>
                </div>
            </div>

            <form className='mentorchat__form'>
                <div className='mentorchat__newmessage'>
                    <input className='mentorchat__message' type="text" id='name' placeholder='enter your message'/>
                </div>

                <div className='mentorchat__button'>
                    <button className='mentorchat__btn'>
                        <img className='mentorchat__icon3' src={Icon3} alt="icon3" />
                    </button>
                </div>
            </form>
        </div>
    </>
    )
}

export default MentorPage5