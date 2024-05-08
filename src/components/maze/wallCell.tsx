export default function Wall() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-orange-700 animate-growWall">
      <div className="w-full h-full flex flex-1 items-center justify-between border-b border-zinc-900">
        <div className="flex h-full border-r-[0.5px] border-zinc-900 w-full flex-1"></div>
        <div className="flex h-full  flex-1"></div>
      </div>
      <div className="w-full h-full flex flex-1 items-center justify-between border-b border-zinc-900">
        <div className="w-1/4 h-full flex-1 border-r border-zinc-900"></div>
        <div className="w-1/2 h-full flex-1 border-r border-zinc-900"></div>
        <div className="w-1/4 h-full flex-1"></div>
      </div>
      <div className="w-full h-full flex flex-1 items-center justify-between">
        <div className="flex h-full border-r-[0.5px] border-zinc-900 w-full flex-1"></div>
        <div className="flex h-full  flex-1"></div>
      </div>
    </div>
  );
}
