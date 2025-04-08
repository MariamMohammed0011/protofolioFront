import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/1-header/Header.jsx";
import Hero from "./components/2-hero/Hero.jsx";
import Main from "./components/3-main/Main.jsx";
import Group from "./components/4-group/Group.jsx";
import Contact from "./components/5-contact/Contact.jsx";
import Footer from "./components/6-footer/Footer.jsx";
import MemberProfile from "./components/7-member/MemberProfile.jsx";

function App() {
  return (
    <Router basename="/">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="divider" />
              <Main />
              <div className="divider" />
              <Group />
              <div className="divider" />
              <Contact />
              <div className="divider" />
              <Footer />
            </>
          } />
          <Route path="/member/:id" element={<MemberProfile />} />
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/group" element={<Group />} />
          
        </Routes>
        {/* <button className="scroll2Top"></button> */}
      </div>
    </Router>
  );
}

export default App;
