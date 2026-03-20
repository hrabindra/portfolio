import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/case-study/:id",
    element: <CaseStudyDetail />,
  },
]);
