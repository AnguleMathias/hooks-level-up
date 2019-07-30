import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

const ConfigValue = {
  showSignMeUp: false,
  showSpeakerSpeakingDays: false,
  showHeader: false
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={ConfigValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
