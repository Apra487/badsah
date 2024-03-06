function RewardHistoryHeader() {
  return (
    <header className="flex justify-center items-center self-stretch px-16 py-5 text-center whitespace-nowrap rounded-t-none rounded-r-xl rounded-b-xl rounded-l-xl bg-[linear-gradient(180deg,#E8BF52_0%,#DFA52E_100%)] text-blue-950 max-md:px-5">
      <div className="flex flex-col">
        <h1 className="self-center text-xl font-semibold leading-7">Rewards History</h1>
        <p className="text-sm leading-5">Track your reward history here</p>
      </div>
    </header>
  );
}

export default RewardHistoryHeader;