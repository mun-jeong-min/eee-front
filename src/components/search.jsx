import { useState } from "react";
import { instance } from "../util/instance";

const Search = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);
  const [cate, setCate] = useState([]);
  const input = (e) => {
    setData(e.target.value);
  };

  const category = () => {
    instance.get("/practice").then(function (res) {
      setCate(res.data.list);
    });
  };

  const search = () => {
    instance
      .post("/practice/read", {
        category: data,
      })
      .then(function (res) {
        setList(res.data.list);
        setCate([]);
      });
  };

  const handleOnKeys = (e) => {
    if (e.key === "enter") {
      search();
    }
  };

  return (
    <div className='App'>
      <div>
        <p>카테고리를 입력하세요</p>
        <div className='search'>
          <input
            className='searchInput'
            type='text'
            value={data}
            onChange={input}
            onClick={category}
            onKeyDown={handleOnKeys}
          />
          <button className='ReSearch' onClick={search}>
            🔍
          </button>
          {cate.map((v, i) => {
            return (
              <div className='clickDiv' onClick={() => setData(v)}>
                {v}
              </div>
            );
          })}
        </div>
        {list.map((v, i) => {
          return <div className='categoryInput'>{v.content}</div>;
        })}
      </div>
    </div>
  );
};

export default Search;
