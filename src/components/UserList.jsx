import PropTypes from 'prop-types';

function UserCard({ id, name, score }) {
  return (
    <article className="flex gap-5 justify-between px-4 py-2 mt-8 w-9/12 text-base font-bold leading-6 text-white rounded-lg bg-orange-400 bg-opacity-20 sm:flex-wrap  m-auto">
      <div className="flex gap-5 justify-between py-1">
        <p>{id}</p>
        <p className="flex-auto">{name}</p>
      </div>
      <p className="my-auto">{score}</p>
    </article>

  );
}

UserCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
};

function UserList() {
  const users = [
    { id: 1, name: 'Harsh Mehta', score: 3415 },
    { id: 2, name: 'Jane Doe', score: 2784 },
    { id: 3, name: 'John Doe', score: 2456 },
    { id: 4, name: 'Alice', score: 1987 },
    { id: 5, name: 'Bob', score: 1890 },
    { id: 6, name: 'Charlie', score: 1789 },
    { id: 7, name: 'David', score: 1678 },
    { id: 8, name: 'Eve', score: 1567 },
    { id: 9, name: 'Frank', score: 1456 },
    { id: 10, name: 'Grace', score: 1345 },
    { id: 11, name: 'Heidi', score: 1234 },

  ];

  return (
    <section>
      {users.map((user) => (
        <UserCard key={user.id} id={user.id} name={user.name} score={user.score} />
      ))}
    </section>
  );
}

export default UserList;