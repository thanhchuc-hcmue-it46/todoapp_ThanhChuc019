import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { HomePage } from './components/Home';
import { About } from './components/About';
import { Todo } from './components/Todo';
import { DangKy } from './components/DangKy';
// import { DemoApi } from './components/DemoAPI';
import { MyContextProvider } from './contexts/MyContext';
import { TodoContextProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <BrowserRouter>
          <nav>
            <Link to='/home' className='mylink'>Home</Link>
            <Link to='/about' className='mylink'>About</Link>
            <Link to='/todos' className='mylink'>TODOs</Link>
            <Link to='/login' className='mylink'>Login</Link>
            <Link to='/register' className='mylink'>Register</Link>
          </nav>

          <TodoContextProvider>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route  path='/about' element={<About />} />
              <Route  path='/home' element={<HomePage />} />
              <Route  path='/todos' element={<Todo />} />
              <Route  path='/login' element={<Login />} />
              <Route  path='/register' element={<DangKy />} />
              {/* <Route exact path='/demo' element={<DemoApi />} /> */}
            </Routes>
          </TodoContextProvider>
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );

}

export default App;
