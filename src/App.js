import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import PageBody from "./components/PageBody/PageBody";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <PageBody />
    </div>
  );
};

export default App;
