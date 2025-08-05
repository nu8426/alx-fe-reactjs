import WelcomeMessage from "./components/Welcomemessage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />
      
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />


      <Footer />
    </>
  );
}

export default App;