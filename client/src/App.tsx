import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Balance } from "./components/balance/Balance";
import { IncomeExpenses } from "./components/incomeExpenses/IncomeExpenses";
import { TransactionList } from "./components/transactionList/TransactionList";
import { Addtransaction } from "./components/addTransaction/Addtransaction";
import { GlobalProvider } from "./context/GlobalState";
import { GoogleLogin, googleLogout } from '@react-oauth/google';

function App() {
  const [singIn, setsingIn] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const responseGoogle = (response: any) => {
    setToken(response.credential);
    setsingIn(true);
  };
  const logout = () => {
    setsingIn(false);
    googleLogout();
  };


  React.useEffect(() => {
    if (darkMode) {
      document.querySelector("body")?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("body")?.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <GlobalProvider>
      {singIn && (
        <div className="left">
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => setDarkMode(!darkMode)}
              defaultChecked={darkMode ? true : false}
            />
            <span className="slider round"></span>
          </label>
          <button className="logout" onClick={logout}>Logout</button>
        </div>
      )}
      <Header darkMode={darkMode} />
      {singIn === false && (
        <div className="center">
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap={true}
            auto_select={true}
            theme="filled_blue"
            login_uri="https://money.mohit.rocks/"
          />
        </div>
      )}
      {singIn && (
        <div className="container">
          <Balance />
          <IncomeExpenses darkMode={darkMode} />
          <Addtransaction token={token} darkMode={darkMode} />
          <TransactionList email={token} darkMode={darkMode} />
        </div>
      )}
    </GlobalProvider>
  );
}

export default App;
