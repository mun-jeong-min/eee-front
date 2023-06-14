import { useState } from "react";
import { instance } from "../util/instance";

const Add = () => {
  const [ex, setEx] = useState("");
  const [pr, setPr] = useState("");
  const [category, setCategory] = useState("");
  const [cate, setCate] = useState([]);

  const changeEx = (e) => {
    setEx(e.target.value);
  };

  const changePr = (e) => {
    setPr(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const clickCategory = () => {
    instance.get("/practice").then(function (res) {
      setCate(res.data.list);
    });
  };

  const clickEx = () => {
    instance
      .post("/practice/category", {
        category: ex,
      })
      .then(function (res) {
        if (res.status === 200) {
          window.alert("전송 성공!");
          setEx("");
        } else {
          window.alert("전송 실패!");
        }
      });
  };

  const clickPr = () => {
    instance
      .post("/practice", {
        content: pr,
        category: category,
      })
      .then(function (res) {
        window.alert("전송 성공!");
        setPr("");
        setCategory("");
        setCate([]);
      });
  };

  return (
    <div className='App'>
      <div className='add'>
        <div className='addEx'>
          <p>운동 추가</p>
          <div className='addDiv'>
            <input
              type='text'
              placeholder='Enter'
              className='addInput'
              value={ex}
              onChange={changeEx}
            />
            <button className='addButton' onClick={clickEx}>
              ADD
            </button>
          </div>
        </div>
        <div className='addPr'>
          <p>행동 추가</p>
          <input
            type='text'
            placeholder='Enter'
            className='addInput'
            value={pr}
            onChange={changePr}
          />
          <input
            type='text'
            className='addPageCategory'
            placeholder='운동 카테고리 입력'
            value={category}
            onChange={changeCategory}
            onClick={clickCategory}
          />
          {cate.map((v, i) => {
            return (
              <div className='addCategory' onClick={() => setCategory(v)}>
                {v}
              </div>
            );
          })}
          <button className='addButton' onClick={clickPr}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
export default Add;
