import React, { FC, useRef, ReactElement } from "react";
import { ITodo } from "../typings";

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getKeyDown = (e: { key: string; } ) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  const addItem = (): void => {
    const val: string = inputRef.current!.value.trim();
    if (val.length) {
      const isExist = todoList.find(todo => todo.content === val);
      if (isExist) {
        alert('已存在该事项！');
        return;
      }

      addTodo ({
        id: new Date().getTime(),
        content: val,
        completed: false
      });

      inputRef.current!.value = '';
    }
  }

  return (
    <div className="">
      <input
        className="w-80 mt-8 rounded-l-lg py-3 px-6 bg-gray-300 outline-none"
        type="text"
        placeholder="输入待办项"
        ref={inputRef}
        onKeyDown={getKeyDown}
        />
      <button
        className="rounded-r-lg py-3 px-6 bg-purple-600"
        onClick={ addItem }
      >
        增加
      </button>
    </div>
  )
}

export default TdInput;
