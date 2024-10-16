import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TodoProvider } from "./components/todo-provide/todo-provide.jsx";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
