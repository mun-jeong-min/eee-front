import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './static/logo.png'

const Main = () => {

    return (
        <div className='App'>
            <div>
                <img src={logo} alt="메인로고" width={300} height={200} />
                <p className='logoP'>동기부여 운동 서비스</p>
            </div>
            <div>
                <p className='emailP'>E-MAIL</p>
                <input type="text" placeholder='이메일을 입력하세요' className='mainInput'></input>
                <button className='mainButton'>입력</button>
            </div>
            <div className='인증코드'>
                <input type="text" placeholder='인증코드 입력' className='mainInput'></input>
                <Link to="/home"><button className='mainButton'>시작</button></Link>
            </div>
        </div>
    )
}

export default Main