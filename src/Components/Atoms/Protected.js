import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../store/UserReducer";

function Protected({ children }) {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/forbidden" replace />;
  }
  return children;
}
export default Protected;
