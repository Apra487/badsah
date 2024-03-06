import PropTypes from "prop-types";
import GalleryComponent from "../components/GalaryComponent";

const ProfileHeader = () => (
  <header className="self-center text-lg font-bold leading-7 text-white whitespace-nowrap">
    Your Profile
  </header>
);

const ProfileIcon = () => (
  <div className="self-center mt-4 rounded-full border border-dashed border-zinc-700 h-[130px] w-[130px]" alt=""></div>
);

const UserInfoSection = ({ title, children }) => (
  <div className="flex gap-5 justify-between px-4 py-5 border-b border-solid border-b-neutral-600">
    <div className="font-medium text-neutral-400">{title}</div>
    <div className="text-white">{children}</div>
  </div>
);

UserInfoSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

const ProfileDetails = () => (
  <section className="flex flex-col pt-px pb-4 mt-5 rounded-lg border border-solid bg-zinc-900 border-neutral-600">
    <UserInfoSection title="Name">Harsh Mehta</UserInfoSection>
    <UserInfoSection title="Mobile No.">82148516248</UserInfoSection>
    <UserInfoSection title="Email Id">Harsh@gmail.com</UserInfoSection>
  </section>
);

const LogoutButton = () => (
  <button className="justify-center items-center px-16 py-4 mt-5 text-center text-white whitespace-nowrap bg-red-500 rounded-lg max-md:px-5 max-md:max-w-full">
    Log out
  </button>
);

const UserProfilePage = () => (
  <main className="flex flex-col items-center px-16 pt-2 pb-5 text-base leading-6 bg-black max-md:px-5 min-h-screen">
    <div className="flex flex-col max-w-full w-[672px]">
      <ProfileHeader />
      <ProfileIcon />
      <section className="flex gap-5 justify-between py-px pr-20 mt-4 text-white whitespace-nowrap rounded-lg border border-solid bg-zinc-900 border-neutral-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-1 justify-center items-center px-16 py-4 border-r border-solid border-r-neutral-600 max-md:px-5">
          <div className="flex flex-col max-w-full w-[100px]">
            <div>Total balance</div>
            <div className="flex gap-2 self-center mt-4 w-[63px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/baea29dfa29f23d0cc9f4aa95f217c2dddcc2f72190c118c0ff89b15c2f4abad?apiKey=84fe58227d624e29926681112a29c1eb&" className="flex-1 shrink-0 w-full aspect-square" alt="Coin" />
              <div className="my-auto">3126</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-auto basis-0">
          <div>Your Rank</div>
          <div className="self-center mt-5">1</div>
        </div>
      </section>
      <ProfileDetails />
      <LogoutButton />
    </div>
    <GalleryComponent />
  </main>
);

export default UserProfilePage;