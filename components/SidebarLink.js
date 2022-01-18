import { useRouter } from "next/router";

const SidebarLink = ({ Icon, text, active }) => {
  const router = useRouter();

  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-sm space-x-3 hoverAnimation ${ active && "font-bold" }`}
      onClick={() => active && router.push("/")} >
      <Icon className="h-5" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};

export default SidebarLink;
