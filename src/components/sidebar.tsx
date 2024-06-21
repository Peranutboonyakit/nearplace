const Sidebar = () => {
  return (
    <div className="w-[90px] h-full fixed z-[11] hidden md:block  bg-white rounded-r-[50px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]">
      <div className="flex justify-center items-center p-6 border-b border-[#E5E5E5]">
        <img src="/images/ics.png" alt="ics" className="w-[52px] h-[53px]" />
      </div>
      <div className="flex flex-col space-y-1 justify-center items-center p-6 border-b border-[#E5E5E5]">
        <div className="w-[36px] h-[36px] rounded-[10px] bg-main-2 flex justify-center items-center">
          <img
            src="/images/icon-sidebar.png"
            alt="icon-sidebar"
            className="w-[16px] h-[14px]"
          />
        </div>
        <p className="sub-12">Place</p>
      </div>
    </div>
  );
};

export default Sidebar;
