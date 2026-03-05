import { useState } from "react";
import RepoCard from "./RepoCard";

function ReposSection({ repos, username, loading, error, hasSearched }) {
  const PAGE_SIZE = 5;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  if (loading) {
    return (
      <p className="mt-10 font-inter text-[#7B899D] text-center">
        Carregando repositórios...
      </p>
    );
  }

  if (error) {
    return (
      <p className="mt-10 font-inter text-red-400 text-center"> {error}</p>
    );
  }

  if (hasSearched && repos.length === 0) {
    return (
      <p className="mt-10 font-inter text-[#7B899D] text-center">
        Nenhum repositório encontrado.
      </p>
    );
  }

  if (!hasSearched) return null;

  const shownRepos = repos.slice(0, visibleCount);
  const remaining = repos.length - visibleCount;
  const nexAmount = Math.min(PAGE_SIZE, remaining);

  return (
    <div className=" grid mt-18 w-full font-inter gap-4">
      <div className="flex gap-2">
        <p className="font-semibold text-base ">
          <span className="text-[#71C4E0]">@{username}</span>
        </p>
        <p className="text-[#7B899D] ml-auto">{repos.length} repositórios</p>
      </div>

      <div className="grid gap-4 w-full">
        {shownRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>

      {remaining > 0 && (
        <button
          type="button"
          onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
          className="mt-4 bg-[#21242C] rounded-md p-3 font-inter font-medium text-[15px] text-[#71C4E0] hover:opacity-90"
        >
          Carreagar mais {nexAmount}
        </button>
      )}
    </div>
  );
}

export default ReposSection;
