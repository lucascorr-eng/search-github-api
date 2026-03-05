import ReposSection from "./components/reposSection";
import SearchSection from "./components/searchSection";
import logo from "./assets/logo.svg";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [searchedUser, setSearchedUser] = useState("");
  const [repos, setRepos] = useState([]);

  function handleChange(e) {
    setSearchedUser(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const username = searchedUser.trim();
    if (!username) return;

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Usuário não encontrado.");
        }
        if (!response.status === 403) {
          throw new Error(
            "Limites de requisições atingido. Tente novamente mais tarde.",
          );
        }
        throw new Error("Erro ao buscar repositórios.");
      }

      const data = await response.json();

      data.sort((a, b) => new Date(b.updated_at) - new Date(a.update_at));

      setRepos(data);
      console.log(data);
    } catch (err) {
      setRepos([]);
      setError(err.message || "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-black w-full min-h-screen">
      <div className="flex items-center justify-start gap-3 m-6 p-6">
        <img src={logo} alt="logo" className="w-9 h-9" />
        <h1 className="font-inter font-bold text-2xl text-[#71C4E0]">REPOS</h1>
      </div>
      <div className="grid  w-full max-w-3xl mx-auto  px-4 py-6 mt-10">
        <SearchSection
          value={searchedUser}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={loading}
        />
        <ReposSection
          repos={repos}
          username={searchedUser}
          loading={loading}
          error={error}
          hasSearched={hasSearched}
        />
      </div>
    </div>
  );
}

export default App;
