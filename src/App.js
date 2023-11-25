import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="w-[100vw] justify-center font-mono">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
