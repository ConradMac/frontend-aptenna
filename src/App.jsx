import "./App.css";
import HomePage from "./pages/HomePage";
import Team from "./pages/Team";
import OneMemberTeam from "./pages/OneMemberTeam";
import UpdatedOneMemberTeamPage from "./pages/UpdatePrestationForm";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PrestationForm from "./Components/PrestationForm";
import { Routes, Route } from "react-router-dom";
import UpdatePrestationForm from "./pages/UpdatePrestationForm";
import UpdateUserProfile from "./pages/UpdateUserProfile";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/team" element={<Team />} />
                <Route path="/team/:id" element={<OneMemberTeam />} />
                <Route path="/team/:id/update" element={<UpdatedOneMemberTeamPage />} />

                {/* <Route path="/techno" element={<Team />} /> */}
                <Route path="/techno/:id" element={<OneMemberTeam />} />
                <Route path="/techno/:id/update" element={<UpdatedOneMemberTeamPage />} />

                {/* <Route path="/prestation" element={<Team />} /> */}
                <Route path="/prestation/:id" element={<OneMemberTeam />} />
                <Route path="/prestation/:id/update" element={<UpdatePrestationForm />} />
                <Route path="/prestationform/:id" element={<PrestationForm />} />

                {/* route UpdateUserProfile.jsx to OneMemberTeam */}
                {/* <Route path="/user/:id/update" element={<OneMemberTeam />} /> */}
                <Route path="/user/:id/update" element={<UpdateUserProfile />} />

                {/* Routes pour l'inscription et la connexion */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
