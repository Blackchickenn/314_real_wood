import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import Ourwork from "./components/Ourwork";
import Ourteam from "./components/Ourteam"
import Contactus from "./components/Contactus";

function App() {

  return (
    <div>
      <CssBaseline/>
      <Navbar />
      <Hero />
      <Ourwork />
      <Ourteam />
      <Contactus />
    </div>
  );
}

export default App;
