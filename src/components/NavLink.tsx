import { Link, useLocation } from "react-router-dom";
import { type ReactNode, useState } from "react";

interface NavLinkProps {
  to?: string;
  children: ReactNode;
  onClick?: () => void;
  hasDropdown?: boolean;
  dropdownItems?: { to: string; label: string }[];
}

export default function NavLink({
  to,
  children,
  onClick,
  hasDropdown = false,
  dropdownItems,
}: NavLinkProps) {
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (hasDropdown &&
      dropdownItems?.some((item) => location.pathname.startsWith(item.to)));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = (e: React.MouseEvent) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (hasDropdown && window.innerWidth >= 1024) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasDropdown && window.innerWidth >= 1024) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={hasDropdown ? "#" : to || "#"}
        onClick={(e) => {
          if (!hasDropdown) {
            handleToggleDropdown(e);
            onClick?.();
          } else {
            handleToggleDropdown(e);
          }
        }}
        className={`block lg:relative rounded-sm text-gray-600 text-md lg:text-lg hover:bg-gray-100 hover:lg:bg-white
                    lg:hover:text-jci-primary py-2 px-3 lg:p-0 group font-normal
                    ${isActive ? "text-jci-primary" : ""}
                    ${hasDropdown ? "flex items-center justify-between w-full lg:w-auto" : ""}`}
        aria-expanded={hasDropdown ? isDropdownOpen : undefined}
        aria-controls={hasDropdown ? "dropdownNavbar" : undefined}
      >
        {children}
        {hasDropdown && (
          <svg
            className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ease-in-out ${isDropdownOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        )}
        {window.innerWidth >= 1024 && (
          <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-jci-primary group-hover:w-full transition-all duration-300 ease-out"></span>
        )}
      </Link>
      {hasDropdown && dropdownItems && (
        <div
          id="dropdownNavbar"
          className={`z-20 font-normal lg:bg-white divide-y divide-gray-500 rounded-lg lg:shadow-sm w-full lg:w-44 mt-1 overflow-hidden
                        ${window.innerWidth < 1024 ? "relative left-0" : "absolute right-0 lg:right-auto lg:left-0"}
                        transition-all duration-300 ease-in-out origin-top
                        ${
                          isDropdownOpen
                            ? "max-h-96 opacity-100 scale-y-100"
                            : "max-h-0 opacity-0 scale-y-0 pointer-events-none"
                        }`}
          aria-labelledby="dropdownNavbarLink"
        >
          <ul className="lg:py-2 text-sm text-gray-700">
            {dropdownItems?.map((item) => (
              <li key={item.to} className="relative">
                <Link
                  to={item.to}
                  className={`block px-4 py-3 rounded-sm lg:rounded-none hover:bg-gray-100 lg:hover:bg-jci-primary lg:text-gray-600 lg:hover:text-white transition-colors duration-150 relative z-30
                                    ${location.pathname === item.to ? "text-jci-primary" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(false);
                    onClick?.();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
