import React from "react";
import styles from "./styles/List.module.css";
import list from "../data.json";
import { Card } from "./Card";
import { useState } from "react";

export const List = () => {
  let data = list.data;
  const [total, setTotal] = useState([]);
  const [datas, setDatas] = useState([]);

  const [select, setSelect] = useState();
  const unique = [...new Set(data.map((item) => item.total_childs))];

  const SendData = (props) => {
    if (JSON.parse(props) === 0) {
      data = list.data;
      data.filter(function (value, i) {
        console.log(value.total_childs == 0);
        return JSON.parse(value.total_childs) == 0;
      });
      console.log(data);
    } else if (JSON.parse(props) === 1) {
      const res = data.filter((i) => i.total_childs === 1);
      console.log(res);
      console.log("data", data);

      console.log("hello 1");
    } else if (JSON.parse(props) === 3) {
      console.log("hello 3");
    } else if (JSON.parse(props) === 100) {
      const res = data.filter((i) => i.total_childs === 100);
      console.log("data", data);

      var result = res.map((i) => i.deep_childrens);
      // result = Object.assign({}, result);
      console.log("res", result);
      setDatas((prev) => [...prev, result]);

      // setDatas(...datas, ...result);
      // setDatas((oldArray) => [...oldArray, result]);
      console.log("hello 100", datas);
    } else {
      data = list.data;
    }
  };

  return (
    <div>
      <div>
        <select
          value={select}
          defaultValue={"ALL"}
          onChange={(e) => SendData(e.target.value)}
        >
          <option value="ALL" disabled>
            ALL
          </option>
          {unique.map((item, i) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className={styles.cards}>
        {data.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
