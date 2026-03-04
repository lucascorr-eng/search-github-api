import ReposSection from "./components/reposSection";
import SearchSection from "./components/searchSection";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="flex items-center justify-start gap-3 m-6 p-6">
        <img src={logo} alt="logo" className="w-9 h-9" />
        <h1 className="font-inter font-bold text-2xl text-[#71C4E0]">REPOS</h1>
      </div>
      <div className="grid  w-full max-w-3xl mx-auto  px-4 py-6 mt-10">
          <SearchSection />
          <ReposSection  />
      </div>
    </div>
  );
}

export default App;
