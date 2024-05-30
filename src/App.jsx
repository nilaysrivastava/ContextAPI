import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./Providers/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="bg-gray-800 text-white flex flex-col items-center justify-center h-screen">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
