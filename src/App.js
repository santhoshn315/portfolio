import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="w-[99vw] justify-center">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
