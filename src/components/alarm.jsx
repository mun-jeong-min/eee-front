import star from './static/star.png'

const Alarm = () => {

    return (
        <div className="App">
            <div className="alarm">
                <img className='alarmImg' src={star} alt="별" />
                <p className='alarmP'>cats 운동이 새로 추가 되었습니다.</p>
            </div>
        </div>
    )
}

export default Alarm