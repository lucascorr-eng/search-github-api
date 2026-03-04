function SearchSection() {
  return (
    <div className="grid">
      <h1 className="font-inter font-bold text-2xl text-center mb-2.5">
        Explore repositórios do <span className="text-[#71C4E0]">GitHub</span>
      </h1>
      <p className="font-inter font-normal text-base text-center text-[#7B899D] mb-10">
        Digite o nome de usuário para visualizar todos os repositórios públicos
      </p>

      <div className="flex gap-5 justify-center">
        <input
          type="text"
          placeholder="Digite o username do Github..."
          className="w-full rounded-md bg-[#21242C] p-3 font-inter font-medium text-[15px]"
        />
        <button className="bg-[#3E637B] rounded-md w-32 p-2 font-inter font-medium text-[15px] cursor-pointer text-black ">
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchSection;
