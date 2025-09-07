import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const [deadline, setDeadline] = useState();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false, deadline });
    setTodo("");
    setDeadline("");
  };

  return (
    <form onSubmit={add} className="grid grid-flow-row gap-2">
      <div className="grid grid-flow-col  grid-cols-6">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black px-3 outline-none duration-150 bg-white/20  py-1.5 col-span-6"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <div className="grid grid-flow-col  grid-cols-6">
        <input
          type="date"
          placeholder="Deadline"
          className="w-full border border-black px-3 outline-none duration-150 bg-white/20 py-1.5 col-span-6"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <div className="grid grid-flow-col grid-cols-6">
        <button
          type="submit"
          className="rounded-lg px-3 py-1 h-10 text-xl bg-blue-600 text-white shrink-0 grid-cols-6"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
