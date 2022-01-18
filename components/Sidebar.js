import Image from "next/image";
import twitterIcon from "../public/images/twitter-icon.svg";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden md:-ml-5 sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full text-white">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src={twitterIcon} width={30} height={30} />
      </div>

      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[48px] text-base font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>

      <div className="text-[#d9d9d9] flex items-center  mt-auto hoverAnimation xl:ml-auto">
        <img
          src="https://www.bootdey.com/img/Content/avatar/avatar7.png"
          alt=""
          className="h-8 w-8 ml-3 rounded-full xl:mr-2.5 flex items-center justify-center"
        />
        <div className="hidden xl:inline leading-8">
          <h4 className="font-bold text-sm">pranay</h4>
          <p className="text-[#6e767d] text-sm">@pranaychavhan</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
