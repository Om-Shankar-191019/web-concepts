import { TodoContextProvider } from "./context/todoContext";
import Home from "./pages/Home";
const App = () => {
  return (
    <TodoContextProvider>
      <Home />
    </TodoContextProvider>
  );
};

export default App;
