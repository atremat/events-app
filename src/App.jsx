import { Routes, Route } from 'react-router-dom';
import 'modern-normalize';
import './App.css';
import EventsPage from './pages/EventsPage/EventsPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ParticipantsPage from './pages/ParticipantsPage/ParticipantsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/registration/:eventId" element={<RegistrationPage />} />
        <Route path="/participants" element={<ParticipantsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
