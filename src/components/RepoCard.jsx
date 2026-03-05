import star from "../assets/star.svg";
import ball from "../assets/ball.svg";

function formatUpdatedAt(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function RepoCard({ repo }) {
  return (
    <div className="grid gap-4 w-full">
      <div className="w-full bg-[#15181E] rounded-xl p-5">
        <h2 className="text-[20px] mb-4">{repo.name}</h2>
        <div className="flex gap-3 w-full text-[#7B899D] text-sm">
          <span className="flex items-center gap-1">
            <img src={ball} />
            {repo.language ?? "sem linguagem"}
          </span>
          <span className="flex items-center gap-1">
            <img src={star} />
            {repo.stargazers_count}
          </span>
          <span className="ml-auto">
            Atualizado em {formatUpdatedAt(repo.updated_at)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
