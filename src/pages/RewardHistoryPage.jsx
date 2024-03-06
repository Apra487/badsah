import CreditScore from "../components/CreditScore";
import GalleryComponent from "../components/GalaryComponent";
import RewardHistoryHeader from "../components/RewardHistoryHeader";


const LeaderBoardPage = () => {
    return (
        <main className='flex flex-col pb-12 bg-black min-h-screen w-full'>
            <RewardHistoryHeader />
            <CreditScore />
            <GalleryComponent />
        </main>
    );
}

export default LeaderBoardPage;