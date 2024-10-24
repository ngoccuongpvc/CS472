import { Routes, Route, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar';
import SearchBox from './components/searchbox';
import Leaderboard from './components/leaderboard';
import PageNotFound from './components/page404';
import Dictionary from './components/dictionary';

const PageWrapper = ({ children }) => {
  return (
    <>
      <div className='my-5 justify-content-center d-flex'>
        <div className='w-50'><SearchBox /></div>
      </div>
      {children}
    </>
  );
};


function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes basename='/'>
          <Route path="/" element={
            <PageWrapper><Leaderboard countdownInterval={25} /></PageWrapper>
          } />
          <Route path="/words/:word" element={
            <PageWrapper><Dictionary /></PageWrapper>
          } />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
