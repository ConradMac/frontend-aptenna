import "./App.css";
import HomePage from "./pages/HomePage";
import Team from "./pages/Team";
import OneMemberTeam from "./pages/OneMemberTeam";
import UpdatedOneMemberTeamPage from "./pages/UpdatedOneMemberTeamPage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* membre team */}
                <Route path="/team" element={<Team />} />
                <Route path="/team/:id" element={<OneMemberTeam />} />
                <Route path="/team/:id/update" element={<UpdatedOneMemberTeamPage />} />
                {/* techno */}
                <Route path="/techno" element={<Team />} />
                <Route path="/techno/:id" element={<OneMemberTeam />} />
                <Route path="/techno/:id/update" element={<UpdatedOneMemberTeamPage />} />
                {/* prestation */}
                <Route path="/prestation" element={<Team />} />
                <Route path="/prestation/:id" element={<OneMemberTeam />} />
                <Route path="/prestation/:id/update" element={<UpdatedOneMemberTeamPage />} />
                {/* signup & signin */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
