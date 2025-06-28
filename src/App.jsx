import { Header } from "./components/Header/Header"
import { Navigate } from './components/Navigate/Navigate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Basket } from './components/Basket/Basket';
import { Mixes } from "./components/Mixes/Mixes";
import { Home } from "./components/Home/Home";
import { Feeds } from "./components/Feeds/feeds";
import { Corms } from "./components/Corms/corms";
import './app.css'
import { Kits } from "./components/KIts/Kits";
import { Accessories } from "./components/Accessories/Accessories";
import { Birds } from "./components/Birds/Birds";
import { About } from "./components/About/About";
import { Ahch } from "./components/Ahch/Ahch";
import { Footer } from "./components/Footer/Footer";
import { Complect } from "./components/Pages/Complect/Complect";
import { Corm } from "./components/Pages/Corm/Corm";
import { Domic } from "./components/Pages/Domic/Domic";
import { Feed } from "./components/Pages/Feed/Feed";
import { Mix } from "./components/Pages/Mix/Mix";
import { Vorobey } from "./components/Pages/Vorobey/Vorobey";
import { SignIn } from "./components/auth/SignIn";
import { useSelector } from "react-redux";
import { Profile } from "./components/Profile/Profile";

function App() {

  const {email} = useSelector((state) => state.auth); 

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        {email ? ( 
          <>
            <Header /> 
            <main className="flex-1">  
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mixes" element={<Mixes />} />
                <Route path="/basket" element={<Basket />} /> 
                <Route path="/feeds" element={<Feeds />} /> 
                <Route path="/corms" element={<Corms />} />
                <Route path="/kits" element={<Kits />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/birds" element={<Birds />} />
                <Route path="/about" element={<About />} />
                <Route path="/ahch" element={<Ahch />} />
                <Route path="/complect" element={<Complect />} />
                <Route path="/corm" element={<Corm />} />
                <Route path="/domic" element={<Domic />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/mix" element={<Mix />} />
                <Route path="/vorobey" element={<Vorobey />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
          </>
        ) : (
          <Routes>
            <Route path="*" element={<SignIn />} /> 
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App;