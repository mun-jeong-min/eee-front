import { Link } from "react-router-dom";
import logo from "./static/logo.png";
import { instance } from "../util/instance";
import { useState } from "react";

const Main = () => {
  const [data, setData] = useState("");
  const [code, setCode] = useState("");
  const [disableLink, setDisableLink] = useState(false);

  const clickLink = (e) => {
    if (disableLink) {
      e.preventDefault();
    }
  };

  const authCode = (e) => {
    setCode(e.target.value);
  };

  const saveUserEmail = (e) => {
    setData(e.target.value);
  };

  const verifyEmail = () => {
    instance.post("/user", {
      email: data,
    });
  };

  const loginAuthCode = () => {
    instance
      .post("/user/signup", {
        code: code,
        email: data,
      })
      .then(function (res) {
        if (res.data == "로그인 성공" || res.data == "회원가입 성공") {
          window.alert("로그인 성공!");
        } else {
          window.alert("인증 실패!");
          setDisableLink(true);
        }
      });
  };

  return (
    <div className='App'>
      <div>
        <img src={logo} alt='메인로고' width={300} height={200} />
        <p className='logoP'>동기부여 운동 서비스</p>
      </div>
      <div>
        <p className='emailP'>E-MAIL</p>
        <input
          type='text'
          placeholder='이메일을 입력하세요'
          className='mainInput'
          value={data}
          onChange={saveUserEmail}></input>
        <button className='mainButton' onClick={verifyEmail}>
          입력
        </button>
      </div>
      <div className='인증코드'>
        <input
          type='text'
          placeholder='인증코드 입력'
          className='mainInput'
          value={code}
          onChange={authCode}></input>
        <Link to='/home' onClick={clickLink}>
          <button
            className='mainButton'
            onClick={loginAuthCode}
            disabled={disableLink}>
            시작
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
