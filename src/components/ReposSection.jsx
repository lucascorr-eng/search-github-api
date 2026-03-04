import star from "../assets/star.svg";
import ball from "../assets/ball.svg";

function ReposSection() {
  return (
    <div className=" grid mt-18 w-full font-inter gap-4">
      <div className="flex gap-2">
        <p className="font-semibold text-base ">
          <span className="text-[#71C4E0]">@gustavojuneo</span>
        </p>
        <p className="text-[#7B899D] ml-auto">29 repositórios</p>
      </div>

      <div className="grid gap-4 w-full">
        <div className="w-full bg-[#15181E] rounded-xl p-5">
          <h2 className="text-[20px] mb-4">websocket</h2>
          <div className="flex gap-3 w-full text-[#7B899D] text-sm">
            <span className="flex items-center gap-1">
              <img src={ball} />
              Javascript
            </span>
            <span className="flex items-center gap-1">
              <img src={star} />
              200
            </span>
            <span className="ml-auto">
              Atualizado em 5 de fevereiro de 2026
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 w-full">
        <div className="w-full bg-[#15181E] rounded-xl p-5">
          <h2 className="text-[20px] mb-4">websocket</h2>
          <div className="flex gap-3 w-full text-[#7B899D] text-sm">
            <span className="flex items-center gap-1">
              <img src={ball} />
              Javascript
            </span>
            <span className="flex items-center gap-1">
              <img src={star} />
              200
            </span>
            <span className="ml-auto">
              Atualizado em 5 de fevereiro de 2026
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 w-full">
        <div className="w-full bg-[#15181E] rounded-xl p-5">
          <h2 className="text-[20px] mb-4">websocket</h2>
          <div className="flex gap-3 w-full text-[#7B899D] text-sm">
            <span className="flex items-center gap-1">
              <img src={ball} />
              Javascript
            </span>
            <span className="flex items-center gap-1">
              <img src={star} />
              200
            </span>
            <span className="ml-auto">
              Atualizado em 5 de fevereiro de 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReposSection;
