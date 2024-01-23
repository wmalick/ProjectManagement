import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length == 0 && (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks yet!
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="py-4 rounded-md bg-stone-50">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between my-2 bg-stone-100 py-2 px-2"
            >
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
