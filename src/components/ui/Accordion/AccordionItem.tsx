import type { ReactNode } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  dark?: boolean;
  isOpen?: boolean;
  subtitle?: string;
  onToggle?: () => void;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
  dark = false,
  subtitle,
}: AccordionItemProps) {
  const bg = dark ? "bg-[#404040]" : "bg-gray-50";
  const headerBg = dark ? "bg-[#404040]" : "bg-gray-100";
  const text = dark ? "text-white" : "text-gray-900";
  const border = dark ? "border-white" : "border-gray-900";

  return (
    <div className={`w-full ${bg} rounded-2xl overflow-hidden`}>
      {/* HEADER */}
      <button
        onClick={onToggle}
        className={`
          w-full
          px-6 lg:px-8
          py-5 lg:py-6
          flex justify-between
          ${subtitle ? "items-start" : "items-center"}
          text-left
          ${headerBg}
          transition-colors duration-300
        `}
      >
        <div className={`flex flex-col ${subtitle ? "gap-4" : "gap-0"}`}>
          <h3 className={`text-base lg:text-xl font-bold ${text} pr-4`}>{title}</h3>
          <span className={`${text} font-normal`}>{subtitle}</span>
        </div>

        <div
          className={`
            flex-shrink-0 w-10 h-10 rounded-full
            border-2 ${border}
            flex items-center justify-center
            transition-transform duration-300
          `}
        >
          {isOpen ? (
            <Minus className={`w-5 h-5 ${text}`} />
          ) : (
            <Plus className={`w-5 h-5 ${text}`} />
          )}
        </div>
      </button>

      {/* CONTENT */}
      <div
        className={`
          grid transition-[grid-template-rows] duration-500 ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <div
            className={`
              px-6 lg:px-8 py-6
              transition-all duration-500 ease-out
              ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
