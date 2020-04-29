import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Balance } from './components/balance/Balance';
import { IncomeExpenses } from './components/incomeExpenses/IncomeExpenses';
import { TransactionList } from './components/transactionList/TransactionList';
import { Addtransaction } from './components/addTransaction/Addtransaction';
import { GlobalProvider } from './context/GlobalState';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function App() {
  const [singIn, setsingIn] = React.useState(false)
  const [email, setemail] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(localStorage.getItem("theme")==="dark" ? true : false);
  const responseGoogle = (response: any) => {
    //console.log(response.profileObj.email);
    setemail(response.profileObj.email);
    
    setsingIn(true);
  }
  const logout = () => {
    setsingIn(false);
  }

  React.useEffect(()=>{
    if(darkMode)
    {
      document.querySelector('body')?.classList.add('dark');
      localStorage.setItem('theme',"dark");
    }
    else
    {
      document.querySelector('body')?.classList.remove('dark');
      localStorage.setItem('theme',"light");
    }
  },[darkMode]);

  return (
    <GlobalProvider>
      
      {singIn && 
      <div className="left">      
        <label className="switch">
          <input type="checkbox" onClick={() => setDarkMode(!darkMode)} defaultChecked={darkMode ? true :false } />
          <span className="slider round"></span>
        </label>
        <GoogleLogout
          clientId="1016751924821-9a88qsp53eu7o6dhf3gh4gab0fi06vlo.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
      }
      <Header darkMode={darkMode} /> 
      
      {singIn === false &&
        <div className="center">
          <GoogleLogin
            clientId="1016751924821-9a88qsp53eu7o6dhf3gh4gab0fi06vlo.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      }
      {singIn &&

        <div className="container">
          

          <Balance />
          <IncomeExpenses darkMode={darkMode} />
          <Addtransaction email={email} darkMode={darkMode} />
          <TransactionList email={email} darkMode={darkMode}  />
        </div>
      }
    </GlobalProvider>
  );
}

export default App;
