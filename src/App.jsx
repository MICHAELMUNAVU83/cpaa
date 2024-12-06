import HomeDesc from "./components/Home";
import Statistics from "./components/Statistics";
import Supporters from "./components/Supporters";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import StandForSection from "./components/Home/StandForSection";
import WhatWeDo from "./components/Home/WhatWeDo";
import JoinSection from "./components/Home/Join";
import EventComponent from "./components/EventComponent";
import OurTeam from "./components/Home/Team";
import ImpactComponent from "./components/Home/Impact";
import NewsComponent from "./components/Home/News";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Navbar />
      <HomeDesc />
      <StandForSection />
      <WhatWeDo />
      <JoinSection />
      <NewsComponent />
      <ImpactComponent />
      <OurTeam />
      <Statistics />
      <Posts />
      <Supporters />
    </Router>
  );
}
