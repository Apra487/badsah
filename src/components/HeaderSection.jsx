import PropTypes from 'prop-types';
import vector from '../assets/Vector.png';

const Badge = ({ count, imageSrc, imageAlt }) => (
    <div className="flex gap-2 items-center px-6 py-2 text-sm font-medium text-black bg-yellow-300 rounded-lg">
      <img loading="lazy" src={imageSrc} alt={imageAlt} className="w-5 h-5" />
      <div>{count}</div>
    </div>
  );
  
  Badge.propTypes = {
    count: PropTypes.number.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  };
  
  const HeaderSection = () => (
    <header className="flex gap-5 items-center justify-between px-10 py-8 bg-black text-white w-full">
      <h1 className="text-3xl font-light uppercase ">Badshah</h1>
      <Badge 
        count={3126} 
        imageSrc={vector} imageAlt="Music Note"
      />
    </header>
  );
  
export default HeaderSection;  