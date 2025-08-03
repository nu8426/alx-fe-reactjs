import WelcomeMessage from "./components/Welcomemessage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;