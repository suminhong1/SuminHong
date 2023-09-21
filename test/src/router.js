import { createBrowserRouter } from "react-router-dom";
import MatchingBoard from "./pages/MatchingBoard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MatchingBoard />,
  },
]);
export default router;
