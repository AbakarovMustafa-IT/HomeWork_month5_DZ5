import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/mainPage/mainPage';
import UsersPage from './pages/usersPage/UsersPage';
import CalculPage from './pages/calculPage/calculatorPage';





const App = () => {
  return (
    <div className='App'>
      {/* <MainPage />
      <UsersPage /> */}
      <CalculPage />
    </div >
  )
};

export default App;
