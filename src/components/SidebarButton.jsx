const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant == "unselected") {
      return "text-[brand-dark-blue]";
    }

    if (variant == "selected") {
      return "bg-[#d2fafc] text-brand-primary";
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
