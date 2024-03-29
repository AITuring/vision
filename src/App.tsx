import { FC, ReactElement } from "react";
import "./index.css";
import TodoList from "./components/TodoList";
// import Menu from "./components/Menu";

interface IProps {}

const App: FC<IProps> = (): ReactElement => {
  return (
    <div className="bg-sea w-full h-screen flex items-center">
      {/* menu目前其实没啥用 */}
      {/* <Menu /> */}
      <TodoList />
    </div>
  );
};

export default App;
