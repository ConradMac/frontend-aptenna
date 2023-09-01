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
import Contact from "./pages/Contact";
import Prestations from "./pages/Prestations";
// import TeamDropdown from "./Components/TeamDropdown";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/team" element={<Team />} />
                <Route path="/team/:id" element={<OneMemberTeam />} />
                <Route path="/team/:id/update" element={<UpdatedOneMemberTeamPage />} />
                <Route path="/prestation/:id/update" element={<UpdatePrestationForm />} />
                <Route path="/prestationform" element={<PrestationForm />} />
                <Route path="/user/:id/update" element={<UpdateUserProfile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/prestation" element={<Prestations />} />
                <Route path="/prestationform/:id" element={<PrestationForm />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
