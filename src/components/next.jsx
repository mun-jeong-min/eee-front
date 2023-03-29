import logo from './static/logo.png'
import add from './static/add.png'
import alarm from './static/alarm.png'
import question from './static/question.png'
import search from './static/search.png'
import { Link } from 'react-router-dom'

const Next = () => {
    
    return (
        <div className='App'>
            <div>
                <img src={logo} alt="메인로고" width={300} height={200} />
                <p className='logoP'>동기부여 운동 서비스</p>
            </div>
            <div className='nextBorder'>
                <Link to="/search"><img className='mainImg' src={search} alt="서칭" /></Link>
                <Link to="/question"><img className='mainImg' src={question} alt="문의" /></Link>
                <Link to="/alarm"><img className='mainImg' src={alarm} alt="알람" /></Link>
                <Link to="/add"><img className='mainImg' src={add} alt="추가" /></Link>
            </div>
        </div>
    )
}

export default Next