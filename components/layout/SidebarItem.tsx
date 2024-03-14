import { IconType } from "react-icons/lib";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem = ({
  label,
  href,
  icon: Icon,
  onClick,
}: SidebarItemProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4  hover:bg-slate-300 hover:bg-opacity-20 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-3 px-4 rounded-sm hover:bg-slate-200 hover:bg-opacity-20 cursor-pointer w-full transition">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
