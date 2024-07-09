//import logo from './logo.svg';
import './App.css';
//import Hello from './01/Hello';
//import MyDiv1 from './02/MyDiv1';
import { IoIosHome } from "react-icons/io";
import CardMain from './03/CardMain';

function App() {
  return (
    <div className="App-header">
      <main className='flex flex-col justify-center items-center w-full md:w-4/5 h-full'>
        <header className='w-full h-16 bg-blue-500 flex justify-between p-5 text-blue-100'>
          <h1 className='text-xl font-bold'>리액트실습</h1>
          <div><IoIosHome /></div>
        </header>
        <div className="w-full grow">
          {/* <Hello/> */}
          {/* <MyDiv1 /> */}
          <CardMain/>
        </div>
        <footer className='w-full h-16 flex justify-center items-center bg-black text-slate-200'>
          <p className='text-sm font-bold'>2024 여름계절 소프트웨어융합기초1 </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
