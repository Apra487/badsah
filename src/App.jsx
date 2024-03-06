import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import RewardPage from './pages/RewardPage';
import RewardHistoryPage from "./pages/RewardHistoryPage";
import UserProfilePage from './pages/UserProfilePage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/reward" element={<RewardPage />} />
        <Route path="/activity" element={<RewardHistoryPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
