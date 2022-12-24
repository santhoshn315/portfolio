import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="w-[1280px] m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
