/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export function Accordion({ children, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`w-full lg:max-w-[613px] ${className}`}>
      <div className="space-y-4">
        {Array.isArray(children)
          ? children.map((child: any, index: number) =>
              child
                ? {
                    ...child,
                    props: {
                      ...child.props,
                      isOpen: openIndex === index,
                      onToggle: () => toggle(index),
                    },
                  }
                : null,
            )
          : null}
      </div>
    </div>
  );
}
