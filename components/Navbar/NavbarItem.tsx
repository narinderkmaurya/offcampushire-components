interface props {
  title: string;
}




const NavbarItem = ({ title }:props) => {
  return (
    <div className='font-semibold group flex items-center gap-1'>
      <div className="z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-[rgba(2, 6, 23, 1)] transition-all hover:bg-gray-100 hover:text-gray-900 text-[14px] ">
        {title}
      </div>
    </div>
  );
};

export default NavbarItem;
