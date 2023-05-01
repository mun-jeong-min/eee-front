import { useState } from "react";
import { instance } from "../util/instance";

const Search = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);
  const input = (e) => {
    setData(e.target.value);
  };

  const search = () => {
    instance
      .post("/practice/read", {
        category: data,
      })
      .then(function (res) {
        setList(res.data.list);
      });
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
          />
          <button onClick={search}>검색</button>
        </div>
        {list.map((v, i) => {
          console.log(v);
          return <div className='categoryInput'>{v.content}</div>;
        })}
      </div>
    </div>
  );
};

export default Search;
