import PropTypes from 'prop-types';

const MerchInfo = ({ iconSrc, label }) => (
    <div className="flex gap-2 justify-between px-4 py-1 mt-1.5 text-center text-black bg-white rounded-lg">
      <img loading="lazy" src={iconSrc} alt="Merch Icon" className="w-5 h-5" />
      <span>{label}</span>
    </div>
  );

  MerchInfo.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

const RewardCard = ({ imageUrl, altText, title, iconUrl }) => (
	<div className='flex flex-col justify-center items-center p-4 bg-gray-800 rounded-lg shadow-md'>
		<div className='overflow-hidden rounded-lg mb-4'>
			<img
				src={imageUrl}
				alt={altText}
				className='w-full h-56 object-cover'
			/>
		</div>
		<h3 className='text-lg text-white mb-2'>{title}</h3>
      <MerchInfo iconSrc={iconUrl} label={'?????'} />

	</div>
);
RewardCard.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	iconUrl: PropTypes.string.isRequired,
	// iconAlt: PropTypes.string.isRequired,
};

const RewardsSection = () => {
	const rewardData = [
		{
			imageUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/bb144e08cfd165f00da7c382510812cbefdd607eac5802789823c84187da8432?apiKey=84fe58227d624e29926681112a29c1eb&',
			altText: 'Merch display',
			title: 'Merch',
			iconUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/00f094da9499f165e7c1129d175c69a7b89954acca816dd2c4f1d2b3571e1ff7?apiKey=84fe58227d624e29926681112a29c1eb&',
			iconAlt: 'Placeholder icon for merch',
		},
		{
			imageUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/392ab0e89f2ad1d42f5a6fd5392711b88d62974272ff3298c8e5551478c13316?apiKey=84fe58227d624e29926681112a29c1eb&',
			altText: 'Meet and greet event',
			title: 'Meet and greet',
			iconUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/00f094da9499f165e7c1129d175c69a7b89954acca816dd2c4f1d2b3571e1ff7?apiKey=84fe58227d624e29926681112a29c1eb&',
			iconAlt: 'Placeholder icon for meet and greet',
		},
		{
			imageUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/36f685b8b5137914d9cbf0e9b1c703b69583d73dc9deaca8b550d75a333991ef?apiKey=84fe58227d624e29926681112a29c1eb&',
			altText: 'Listening session event',
			title: 'Listening session',
			iconUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/00f094da9499f165e7c1129d175c69a7b89954acca816dd2c4f1d2b3571e1ff7?apiKey=84fe58227d624e29926681112a29c1eb&',
			iconAlt: 'Placeholder icon for listening session',
		},
		{
			imageUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/11ec0523e9172ae859f5057b141411b2c179351af4b996727c6eda82cc72eda4?apiKey=84fe58227d624e29926681112a29c1eb&',
			altText: 'Concerts tickets',
			title: 'Concert tickets',
			iconUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/00f094da9499f165e7c1129d175c69a7b89954acca816dd2c4f1d2b3571e1ff7?apiKey=84fe58227d624e29926681112a29c1eb&',
			iconAlt: 'Placeholder icon for concert tickets',
		},
		{
			imageUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/a31926b33af0d4692f21c66555393504c2ad46837821778b8b807adc36dd65a8?apiKey=84fe58227d624e29926681112a29c1eb&',
			altText: 'PreRelease track access',
			title: 'PreRelease track',
			iconUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/00f094da9499f165e7c1129d175c69a7b89954acca816dd2c4f1d2b3571e1ff7?apiKey=84fe58227d624e29926681112a29c1eb&',
			iconAlt: 'Placeholder icon for preRelease track',
		},
		{
			imageUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/5fdc485fc107caedde25f14654b6d661091475a8077d60c77b5c5282ca4fe7fa?apiKey=84fe58227d624e29926681112a29c1eb&',
			altText: 'Join music video set',
			title: 'Join music video',
			iconUrl:
				'https://cdn.builder.io/api/v1/image/assets/TEMP/00f094da9499f165e7c1129d175c69a7b89954acca816dd2c4f1d2b3571e1ff7?apiKey=84fe58227d624e29926681112a29c1eb&',
			iconAlt: 'Placeholder icon for join music video',
		},
	];

	return (
		<section className='py-8 px-4 bg-gray-900'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-2xl font-bold text-white mb-8 text-left'>
					Rewards
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{rewardData.map((reward, index) => (
						<RewardCard key={index} {...reward} />
					))}
				</div>
			</div>
		</section>
	);
};

export default RewardsSection;
