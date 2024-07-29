const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant == "unselected") {
      return "text-[#35383E]";
    }

    if (variant == "selected") {
      return "bg-[#d2fafc] text-[#00ADB5]";
    }
  };

  return (
    <a
      href="#"
      className={`flex font-normal items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}
    >
      {children}
    </a>
  );
};

export default SidebarButton;
