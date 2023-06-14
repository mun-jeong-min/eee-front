import { useEffect, useState } from "react";
import { instance } from "../util/instance";

const Question = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  const question = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    instance.get("/question").then(function (res) {
      setList(res.data.list);
    });
  }, []);

  const clickButton = () => {
    instance
      .post("/question", {
        content: data,
      })
      .then(function (res) {
        if (res.status === 200) {
          window.alert("요청 성공!");
          setData("");
        } else {
          window.alert("요청 실패!");
        }
      });
  };

  return (
    <div className='Question'>
      <div className='questionPageDiv'>문의 해주세요</div>
      <div className='questionDiv'>
        <input
          type='text'
          placeholder='ENTER'
          className='questionInput'
          value={data}
          onChange={question}
        />
        <button className='questionButton' onClick={clickButton}>
          BUTTON
        </button>
      </div>
      <div className='questionResult'>
        {list.map((v, i) => {
          return <div className='questionCnt'>{v.content}</div>;
        })}
      </div>
    </div>
  );
};

export default Question;
