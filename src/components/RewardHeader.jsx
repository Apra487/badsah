import PropTypes from 'prop-types';

const RewardItem = ({ src, alt, children }) => (
	<div className='flex gap-2 items-center'>
		<img
			src={src}
			alt={alt}
			className='self-stretch my-auto w-4 aspect-square'
		/>
		{children}
		<img
			src={src}
			alt={alt}
			className='self-stretch my-auto w-4 aspect-square'
		/>
	</div>
);

RewardItem.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

// Main Component
const RewardHeader = () => {
	return (
		<section className='flex flex-col items-center self-stretch px-4 py-5 rounded-t-none rounded-b-xl rounded-r-xl bg-[linear-gradient(180deg,#E8BF52_0%,#DFA52E_100%)] text-blue-950 '>
			<header className='flex justify-center items-center self-stretch px-16 text-xl font-semibold leading-7 whitespace-nowrap max-md:px-5 max-md:max-w-full'>
				<RewardItem
					src='https://cdn.builder.io/api/v1/image/assets/TEMP/98efc0136cd0dd6288fe77159cf91155072166f6ac3629b4d3ccdc76e5b0d856?apiKey=84fe58227d624e29926681112a29c1eb&'
					alt='Rewards Icon'
				>
					<div className='self-stretch'>Rewards</div>
				</RewardItem>
			</header>
			<p className='text-sm leading-5 text-center whitespace-nowrap'>
				{' '}
				Redeem your Badcoins for exciting rewards{' '}
			</p>
			<section className='flex gap-5 justify-between px-4 py-2.5 mt-4 max-w-full text-black rounded-xl border-2 border-solid border-[color:var(--app-badboyshah-club-nero,#FFF)] w-[448px] max-md:flex-wrap'>
				<div className='flex gap-2 justify-between'>
					<img
						src='https://cdn.builder.io/api/v1/image/assets/TEMP/98efc0136cd0dd6288fe77159cf91155072166f6ac3629b4d3ccdc76e5b0d856?apiKey=84fe58227d624e29926681112a29c1eb&'
						alt='Your Badcoins'
						className='w-16 aspect-square'
					/>
					<div className='flex flex-col flex-1 my-auto'>
						<strong className='text-base font-medium leading-6'>
							Your Badcoins
						</strong>
						<p className='text-sm leading-5 whitespace-nowrap'>
							{' '}
							redeem your badcoins{' '}
						</p>
					</div>
				</div>
				<div className='my-auto text-base font-semibold leading-6'>
					2415
				</div>
			</section>
		</section>
	);
};

export default RewardHeader;
