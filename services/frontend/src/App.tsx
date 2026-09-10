import { Route, Routes } from 'react-router-dom';
import ChatwootWidget from './shared/components/ChatwootWidget';
import HomePage from './features/home/pages/HomePage';
import ImpressumPage from './features/legal/pages/ImpressumPage';
import DatenschutzPage from './features/legal/pages/DatenschutzPage';

export default function App() {
  return (
    <>
      <ChatwootWidget />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </>
  );
}
