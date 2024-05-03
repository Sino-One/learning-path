import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserContextProvider from "./store/UserReducer";
import { useContext } from "react";
import { UserContext } from "./store/UserReducer";
import SignIn from "./Components/Molecules/SignIn/SignIn";
import SignUp from "./Components/Molecules/SignUp/SignUp";
import ResponsiveBar from "./Components/Molecules/ResponsiveBar";
import Protected from "./Components/Atoms/Protected";
import IsNotAuth from "./Components/Pages/IsNotAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user, setUser } = useContext(UserContext);

  return (
    <UserContextProvider>
      <ResponsiveBar />
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forbidden" element={<IsNotAuth />}></Route>
        <Route
          path="/"
          element={
            <Protected>
              <h1>Home</h1>
            </Protected>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </UserContextProvider>
  );
}

export default App;
