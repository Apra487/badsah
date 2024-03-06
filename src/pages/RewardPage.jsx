import GalleryComponent from "../components/GalaryComponent";
import RewardHeader from "../components/RewardHeader";
import RewardsSection from "../components/RewardSection";


const RewardPage = () => {
    return (
        <main className='flex flex-col pb-12 bg-black h-full w-full'>
            <RewardHeader />
            <RewardsSection />
            <GalleryComponent />
        </main>
    );
}

export default RewardPage;