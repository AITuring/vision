import { FC, ReactElement, useCallback, useEffect, useReducer } from "react";
import TdInput from "./Input";
import TdList from "./List";
import Time from "../Time";
import { todoReducer } from "./reducer";
import { ACTION_TYPE, IState, ITodo } from "./typings";

const TodoList: FC = (): ReactElement => {
  // const [todoList, setTodoList] = useState<ITodo[]> ([]);
  // const initialState: IState = {
  //   todoList: []
  // }
  // 惰性初始化state
  function init(initTodoList: ITodo[]): IState {
    return {
      todoList: initTodoList,
    };
  }

  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    // console.log(state.todoList);
    const todoStorage = JSON.parse(localStorage.getItem("todo") || "[]");
    dispatch({
      type: ACTION_TYPE.STORAGE_LIST,
      payload: todoStorage,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state.todoList));
  }, [state.todoList]);

  const addTodo = useCallback((todo: ITodo): void => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo,
    });
  }, []);

  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id,
    });
  }, []);

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id,
    });
  }, []);

  return (
    <div className="flex-1 overflow-y-auto h-full p-4 backdrop-blur-none bg-opacity-20 bg-gray-100 dark:bg-gray-500 dark:bg-opacity-90">
      <div className="text-3xl font-bold text-gray-800 mt-6 hover:drop-shadow-2xl brightness-100">
        今日宜开心
      </div>
      <Time />
      <TdInput addTodo={addTodo} todoList={state.todoList} />
      <TdList
        todoList={state.todoList}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
};

export default TodoList;
