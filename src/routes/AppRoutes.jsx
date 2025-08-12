import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Education from "../pages/Education";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "education", element: <Education /> }
        ]
    }
]);

export default router;