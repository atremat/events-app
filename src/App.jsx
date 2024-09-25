import { Routes, Route } from 'react-router-dom';
import './App.css';
import EventsPage from './pages/EventsPage/EventsPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ParticipantsPage from './pages/ParticipantsPage/ParticipantsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventsPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/participants" element={<ParticipantsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
