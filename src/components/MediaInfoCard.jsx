import PropTypes from 'prop-types';
import vector from '../assets/Vector.png';

const MediaInfoCard = ({
	iconSrc,
	iconAlt,
	title,
	subtitle,
	buttonText,
	badgeContent,
	infoText,
	bgColorFrom = 'green-400',
	bgColorTo = 'blue-500',
	onButtonClick,
}) => (
	<section
		className={`flex flex-col p-4 my-4 rounded-lg bg-gradient-to-r from-${bgColorFrom} to-${bgColorTo}`}
	>
		<header className='flex gap-5 justify-between items-center'>
			<div className='flex gap-2 items-center text-white'>
				<img
					src={iconSrc}
					alt={iconAlt}
					className='w-8 h-8'
					loading='lazy'
				/>
				<h3>{title}</h3>
			</div>
			<div className='flex gap-1 items-center px-2.5 py-1.5 text-yellow-500 rounded-full border border-yellow-500'>
				<img
					src={vector}
					alt='Badge icon'
					className='w-6 h-6'
					loading='lazy'
				/>
				<span>{badgeContent}</span>
			</div>
		</header>
		<div className='mt-2 text-lg font-medium leading-7 text-white'>
			{subtitle}
		</div>
		{infoText ? (
			<p className='text-sm leading-5 text-white mt-1'>{infoText}</p>
		) : (
			<p className='text-sm leading-5 text-white mt-1'>
				{`Interact with ${title} to confirm your action.`}
			</p>
		)}
		<button
			type='button'
			className='flex justify-center items-center px-16 py-2 mt-4 text-center text-black bg-white rounded-lg cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out'
			onClick={onButtonClick}
		>
			{buttonText}
		</button>
	</section>
);

MediaInfoCard.propTypes = {
	iconSrc: PropTypes.string.isRequired,
	iconAlt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	buttonText: PropTypes.string.isRequired,
	badgeContent: PropTypes.node,
	infoText: PropTypes.string,
	bgColorFrom: PropTypes.string,
	bgColorTo: PropTypes.string,
	onButtonClick: PropTypes.func.isRequired,
};

export default MediaInfoCard;
