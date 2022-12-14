import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import MainView from "./components/MainView";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="min-h-screen mx-40 text-white 2xl:mx-auto bg-background App">
      <Navbar />
      <div className="grid grid-cols-4 gap-4 px-8 md:px-2 sm:px-0 ">
        <LeftSidebar />
        <MainView />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;

// <i className="fi fi-sr-home"></i>
// <i className="fi fi-sr-envelope"></i>
// <i className="fi fi-sr-apps"></i>
// <i className="fi fi-sr-bell"></i>
// <i className="fi fi-sr-settings"></i>
// <i className="fi fi-sr-heart"></i>
// <i className="fi fi-sr-grid"></i>
// <i className="fi fi-sr-sparkles"></i>
// <i className="fi fi-sr-inbox-out"></i>
// <i className="fi fi-sr-caret-down"></i>
// <i className="fi fi-sr-comment"></i>
// <i className="fi fi-sr-resize"></i>
// <i className="fi fi-sr-picture"></i>
// <i className="fi fi-sr-play"></i>
// <i className="fi fi-sr-calendar-clock"></i>
// <i className="fi fi-sr-stats"></i>
