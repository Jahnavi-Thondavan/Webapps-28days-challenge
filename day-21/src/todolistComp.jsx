import { useState } from "react"
import "./todolistComp.css"

function TodoList() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    }

    setTasks([...tasks, newTask])
    setTask("")
  }

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  // Toggle Complete
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
    setTasks(updatedTasks)
  }

  // Delete Single Task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((t) => t.id !== id)
    setTasks(filteredTasks)
  }

  // Clear Completed Tasks
  const clearCompleted = () => {
    const activeTasks = tasks.filter((t) => !t.completed)
    setTasks(activeTasks)
  }

  return (
    <div className="todoListContainer">

      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="listContainer">
        {tasks.map((t) => (
          <div key={t.id} className="listItem">
            <div className="leftSection">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTask(t.id)}
              />
              <p className={t.completed ? "completed" : ""}>
                {t.text}
              </p>
            </div>

            <button
              className="deleteBtn"
              onClick={() => deleteTask(t.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        className="clearTaskBtn"
        onClick={clearCompleted}
      >
        Clear completed tasks
      </button>

    </div>
  )
}

export default TodoList