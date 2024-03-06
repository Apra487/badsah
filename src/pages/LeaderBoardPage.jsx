import GalleryComponent from "../components/GalaryComponent";
import LeaderBoardHeader from "../components/LeaderBoardHeader";
import ProfileSection from "../components/ProfileSection";
import UserList from "../components/UserList";

const LeaderBoardPage = () => {
    return (
        <main className='flex flex-col pb-12 bg-black h-full w-full'>
            <LeaderBoardHeader />
            <ProfileSection />
            <UserList />
            <GalleryComponent />
        </main>
    );
}

export default LeaderBoardPage;