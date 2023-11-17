import NavBar from '../../components/NavBar/NavBar';

function MentorPage4() {
    return (
        <div>
            <NavBar />
            <div className='mentor'>
                <h1 className='mentorPage__title'>Here are the best matches for you.</h1>
                <h2 className='mentorPage__introText'>Based on your preferences, here are the 
                    top mentors that match. We recommend starting a conversation with one of them.</h2>
            </div>
        </div>
    )
}

export default MentorPage4