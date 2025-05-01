import Avatar from "./Avatar";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = '2 Truths & A Lie - Game setup',
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-[#333333] font-semibold">
        {title}
      </div>
      <Avatar size={30}/>
    </div>
  );
};

export default Header;
