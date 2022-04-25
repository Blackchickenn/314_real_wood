import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import Ourwork from "./components/Ourwork";

function App() {

  return (
    <div>
      <CssBaseline/>
      <Navbar />
      <Hero />
      <Ourwork />
    </div>
  );
}

export default App;
