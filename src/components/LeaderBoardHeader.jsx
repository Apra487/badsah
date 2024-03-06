import PropTypes from 'prop-types';
import vector from '../assets/badcoin.svg.png';

const UserCard = ({ name, points, rank, imgSrc, badgeSrc }) => (
  <div className="flex gap-5 justify-between self-stretch px-4 py-2.5 w-full max-w-md text-black rounded-xl border-2 border-solid border-white-400 m-auto">
    <div className="flex gap-4 my-auto">
      <img
        loading="lazy"
        src={imgSrc}
        alt={`Profile of ${name}`}
        className="w-16 aspect-square"
      />
      <div className="flex flex-col flex-1 my-auto">
        <div className="text-base font-medium leading-6">{name}</div>
        <div className="flex justify-between py-px text-sm leading-5">
          <img loading="lazy" src={badgeSrc} className="mx-0 w-4 aspect-square" alt="" />
          <div>{points}</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col px-5 py-2.5 text-center bg-orange-200 rounded-lg">
      <div className="text-base font-semibold leading-6">Rank</div>
      <div className="text-lg leading-7">{rank}</div>
    </div>
  </div>
);


UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    badgeSrc: PropTypes.string.isRequired,
};

function Leaderboard() {
  const users = [
    {
      name: "Harsh Mehta",
      points: "1000",
      rank: 352,
      imgSrc: vector,
      badgeSrc: vector
    },
  ];

  return (
    <div className="flex justify-center items-center px-16 py-5 bg-gradient-to-b from-yellow-400 to-yellow-600 text-black rounded-t-none rounded-r-xl rounded-b-xl rounded-l-xl">
      <div className="flex flex-col items-center max-w-full w-[800px]">
        <header className="text-2xl text-blue-900 font-semibold leading-8 text-center my-2">Leaderboard</header>
        <p className="text-sm leading-5 text-center">Complete Tasks Daily & Earn Rewards</p>
        <section className="mt-4 w-full">
 {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Leaderboard;