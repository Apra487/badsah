import PropTypes from "prop-types";

const InfoBlock = ({ imageUrl, altText, text }) => (
    <div className="flex gap-2 justify-between font-medium">
      <img src={imageUrl} alt={altText} className="my-auto w-4 aspect-square" />
      <div>{text}</div>
    </div>
  );

  InfoBlock.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
  
  const CreditScore = () => {
    const infoData = [
      {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9a3aeb568f2b073683a539bafbfc349cf891821f5f839f36a25701eb872f1f9?apiKey=84fe58227d624e29926681112a29c1eb&",
        altText: "Credited icon",
        text: "Credited"
      },
      {
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c05c2439ca387549a3e2e938cb45da8b59208445bd55f70b6727dd668ba71817?apiKey=84fe58227d624e29926681112a29c1eb&",
        altText: "Points icon",
        text: "1000"
      },
    ];
  
    return (
      <section className="flex gap-5 justify-between self-stretch px-4 py-2 max-w-screen-sm text-lg leading-7 text-white whitespace-nowrap rounded-xl bg-orange-400 bg-opacity-20 max-md:flex-wrap mx-auto mt-8 w-screen">
        {infoData.map((data, index) => (
          <InfoBlock key={index} imageUrl={data.imageUrl} altText={data.altText} text={data.text} />
        ))}
      </section>
    );
  };
  
  export default CreditScore;