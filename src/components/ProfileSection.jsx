import PropTypes from 'prop-types';

const ProfileCard = ({ imageUrl, name, followersCount, followersIconUrl }) => (
  <div className="flex flex-col grow px-5 mt-8 text-white text-center max-w-xs m-auto">
    <img loading="lazy" src={imageUrl} alt={`Profile of ${name}`} className="self-center rounded-full w-24 h-24" />
    <div className="mt-5 text-base font-medium">{name}</div>
    <div className="flex items-center justify-center mt-2">
      <img loading="lazy" src={followersIconUrl} alt="Followers icon" className="mr-2 w-4 h-4" />
      <div>{followersCount}</div>
    </div>
  </div>
);

ProfileCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followersCount: PropTypes.string.isRequired,
  followersIconUrl: PropTypes.string.isRequired,
};

function ProfileSection() {
  const profilesData = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b2c5abd9344f64e2713f7399f7b26c54f8ac39669eb468acfc335c4567618f?apiKey=84fe58227d624e29926681112a29c1eb&",
      name: "Harsh Mehta",
      followersCount: "1000",
      followersIconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3340bb2004338d868a657adafc5aa71083b7d29952b06721687d1958c6fa9d19?apiKey=84fe58227d624e29926681112a29c1eb&",
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2d0eb9a9df39c8171a1dc224e04a2a12a652fb87283f5bd0bfb8c3164a3073c?apiKey=84fe58227d624e29926681112a29c1eb&",
      name: "Harsh Mehta",
      followersCount: "0",
      followersIconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a202d33065d1441c9ae77a6f15b9d1e58490caba0d3ef09a59190bf92826662?apiKey=84fe58227d624e29926681112a29c1eb&",
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7517cadbdff8969170d39d55b5a50735e101a383bf7c1fd830085fc0e7a533c6?apiKey=84fe58227d624e29926681112a29c1eb&",
      name: "Harsh Mehta",
      followersCount: "1000",
      followersIconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/14b0741ae00a95ccc4be967263bfc676b79a95ee3c7dce415f53e96ef4080615?apiKey=84fe58227d624e29926681112a29c1eb&",
    }
  ];

  return (
    <section className="container mx-auto p-5">
      <div className="flex flex-wrap justify-around">
        {profilesData.map((profile, index) => (
          <ProfileCard
            key={index}
            imageUrl={profile.imageUrl}
            name={profile.name}
            followersCount={profile.followersCount}
            followersIconUrl={profile.followersIconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ProfileSection;