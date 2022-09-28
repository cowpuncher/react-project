import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegPage from './pages/RegPage';

function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/chats'} element={<RegPage />} />
      </Routes>
    </>
  );
}

export default App;
