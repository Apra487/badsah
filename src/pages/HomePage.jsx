import spotify from '../assets/spotify.png';
import instagram from '../assets/instagram.png';
import vote from '../assets/vote.png';
import whatsapp from '../assets/whatsapp.png';
import MediaInfoCard from '../components/MediaInfoCard';
import HeaderSection from '../components/HeaderSection';
import GalaryComponent from '../components/GalaryComponent';

const HomePage = () => {
	const handleClick = (interactionType) => {
		console.log(`${interactionType} interaction confirmed.`);
	};
	return (
		<main className='flex flex-col pb-12 bg-black'>
			<HeaderSection />
			<nav className='flex flex-col flex-1 items-center max-md:max-w-full'>
				<article className='flex flex-col px-4 mt-4 max-w-full text-base leading-6 w-[672px]'>
					<h3 className='font-medium text-white max-md:max-w-full'>
						Music
					</h3>
					<MediaInfoCard
						iconSrc={spotify}
						alt='Play Music'
						title='Listen to Daku on spotify'
						subtitle='Play Song on spotify to confirm your Reward'
						buttonText='Play'
						badgeContent={10}
						onButtonClick={() => handleClick('Music')}
						iconAlt='Spotify Icon'
					/>
				</article>
				<article className='flex flex-col px-4 mt-4 max-w-full text-base leading-6 w-[672px]'>
					<h3 className='font-medium text-white max-md:max-w-full'>
						Polls
					</h3>
					<MediaInfoCard
						iconSrc={vote}
						alt='Vote Now'
						title='Play a poll on WhatsApp'
						subtitle='Play a poll on WhatsApp'
						buttonText='Play'
						badgeContent={12}
						bgColorFrom='blue-400'
						onButtonClick={() => handleClick('Poll')}
						iconAlt='Vote Icon'
					/>
				</article>
				<article className='flex flex-col px-4 mt-4 max-w-full text-base leading-6 w-[672px]'>
					<h3 className='font-medium text-white max-md:max-w-full'>
						Social
					</h3>
					<MediaInfoCard
						iconSrc={spotify}
						alt='Play Music'
						title='Follow Now'
						subtitle='Follow Badshah on Spotify'
						buttonText='Follow'
						badgeContent={6}
						onButtonClick={() => handleClick('Follow')}
						iconAlt='Spotify Icon'
					/>
					<MediaInfoCard
						iconSrc={instagram}
						alt='Vote'
						title='Post Now'
						subtitle='Put a story of daku tagging Badshah on Instagram'
						buttonText='Post'
						infoText={'Tag @badshah & @Badsquad and put the story.'}
						bgColorFrom='pink-600'
						bgColorTo='indigo-600'
						badgeContent={4}
						onButtonClick={() => handleClick('Post')}
						iconAlt='Instagram Icon'
					/>
					<MediaInfoCard
						iconSrc={whatsapp}
						alt='whatsapp'
						title='React Now'
						subtitle="react to Badshah's message on whatsapp"
						buttonText='React'
						badgeContent={5}
						onButtonClick={() => handleClick('React')}
						iconAlt='Whatsapp Icon'
					/>
				</article>
			</nav>
			<GalaryComponent />
		</main>
	);
};

export default HomePage;
