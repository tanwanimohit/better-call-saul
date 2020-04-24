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

  const responseGoogle = (response: any) => {
    //console.log(response.profileObj.email);
    setemail(response.profileObj.email);
    setsingIn(true);
  }
  const logout = () => {
    setsingIn(false);
  }
  return (
    <GlobalProvider>
      <Header />
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
          <div className="left">
            
            <GoogleLogout
              clientId="1016751924821-9a88qsp53eu7o6dhf3gh4gab0fi06vlo.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logout}
            ></GoogleLogout>
          </div>

          <Balance />
          <IncomeExpenses />
          <Addtransaction email={email} />
          <TransactionList email={email} />
        </div>
      }
    </GlobalProvider>
  );
}

export default App;
