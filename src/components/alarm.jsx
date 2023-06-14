import star from "./static/star.png";
import { instance } from "../util/instance";
import { useEffect, useState } from "react";

const Alarm = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    instance.get("/alarm").then(function (res) {
      setData(res.data.list);
    });
  }, []);

  return (
    <div className='App'>
      {data.map((v, i) => {
        console.log(v);
        return (
          <div className='alarm'>
            <img className='alarmImg' src={star} alt='별' />
            <p className='alarmP'>{v.content}</p>
            <p className='alarmDate'>{v.created_at}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Alarm;
