import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const imageItems = [
	{
		src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a3d51323ac3de3a9724991daa0ecd4c0b72f3e08c178b347a1e3bd861593121f?apiKey=84fe58227d624e29926681112a29c1eb&',
		alt: 'Home',
		link: '/',
	},
	{
		src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7ed7f6dd7629abc3bdfb62106c883012fc64dfe6e7d20009da815121de31ae91?apiKey=84fe58227d624e29926681112a29c1eb&',
		alt: 'Leaderboard',
		link: '/leaderboard',
	},
	{
		src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d8c077c6d12ddd496b07da8c2fb16d5c70605024518e9f1a0b69fb3978a1eb94?apiKey=84fe58227d624e29926681112a29c1eb&',
		alt: 'Reward',
		link: '/reward',
	},
	{
		src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a888df23cb50c7c3bd92c50cfc3bfe56bec28a707ef25a87d015e557ee2a4bb5?apiKey=84fe58227d624e29926681112a29c1eb&',
		alt: 'activity',
		link: '/activity',
	},
	{
		src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bfcba299b7b44b471a478d6469c65b6d30a6bc94f4e1332b95fde6fc9ebf979f?apiKey=84fe58227d624e29926681112a29c1eb&',
		alt: 'user profile',
		link: '/profile',
	},
];

const Icon = ({ src, alt, onClick }) => (
	<button
		onClick={onClick}
		className='inline-flex justify-center items-center cursor-pointer focus:outline-none'
	>
		<img
			loading='lazy'
			src={src}
			alt={alt}
			className='w-6 md:w-6 lg:w-8 xl:w-8 aspect-square transition-transform duration-200 hover:scale-110'
		/>
	</button>
);

Icon.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	onClick: PropTypes.func,
};

function GalleryComponent() {
	let navigate = useNavigate();

	const handleIconClick = (link) => {
		navigate(link);
	};

	return (
		<section className='flex gap-5 justify-between  w-5/6 sm:w-3/4 md:w-1/2 lg:w-3/5 xl:w-1/3 px-5 py-2 rounded-full border border-solid backdrop-blur-md bg-gray-900 bg-opacity-40 border-gray-700 fixed bottom-3 left-1/2 -translate-x-1/2'>
			{imageItems.map((image, index) => (
				<Icon
					key={index}
					src={image.src}
					alt={image.alt}
					onClick={() => handleIconClick(image.link)}
				/>
			))}
		</section>
	);
}
export default GalleryComponent;
