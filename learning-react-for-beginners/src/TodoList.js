import React, { useEffect, useState } from "react";
import styles from "./css/TodoList.module.css";

const TodoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    // js라면
    // toDos.push를 했을것 같지만
    // react는 state를 직접적으로 수정하지 않음
    setToDoList((prevArray) => [toDo, ...prevArray]);

    // const food = [1,2,3,4]
    // 여기에 새로운 array를 넣고싶으면
    // [6, food]
    // => [6, array] 가 들어감
    // 그러므로 스프레드로 뿌려줘야됨 [6, ...food];

    setToDo("");
  };
  useEffect(() => {
    console.log("jiwon ", toDoList);
  }, [toDoList]);

  return (
    <section className={styles.sec}>
      <h1>My Todo List Length [{toDoList.length}]</h1>

      <form onSubmit={onSubmit}>
        <input
          className={styles.input}
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="write your to do.."
        />
        <button className={styles.submitBtn} type="submit">
          Add Todo List
        </button>
      </form>

      {toDoList.length > 0 && (
        <ul>
          {toDoList.map((item, idx) => {
            return (
              <li key={item + idx}>
                <span>{idx} </span>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default TodoList;
