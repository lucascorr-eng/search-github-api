import RepoCard from "./repoCard";

function ReposSection({ repos, username, loading, error, hasSearched }) {
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

  return (
    <div className=" grid mt-18 w-full font-inter gap-4">
      <div className="flex gap-2">
        <p className="font-semibold text-base ">
          <span className="text-[#71C4E0]">@{username}</span>
        </p>
        <p className="text-[#7B899D] ml-auto">{repos.length}</p>
      </div>

      <div className="grid gap-4 w-full">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default ReposSection;
