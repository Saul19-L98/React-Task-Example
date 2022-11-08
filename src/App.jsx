import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-7">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
