import { Tab } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Particles from "react-tsparticles";

interface FancyTabProps {
  id: string;
  accentColor: string;
  children: React.ReactNode;
}

export function FancyTab({ children, id, accentColor }: FancyTabProps) {
  return (
    <Tab as="div" className="w-full focus:outline-none group">
      {({ selected }) => (
        <button className="relative w-full py-4 text-white focus:outline-none uppercase text-lg w-full">
          {children}
          {selected && (
            <motion.div
              className="w-full absolute left-0 right-0 z-10 rounded-full h-[2px] top-0"
              layoutId="underline"
              initial={false}
              animate={{
                background: accentColor,
                boxShadow: `0 14px 30px 1px ${accentColor}, 0 4px 12px ${accentColor}, 0 1px 7px ${accentColor}`,
              }}
            />
          )}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <Particles
                  id={id}
                  height="100px"
                  options={{
                    background: {
                      color: "green",
                    },

                    particles: {
                      color: {
                        value: accentColor,
                      },
                      number: {
                        value: 500,
                        density: {
                          enable: true,
                        },
                      },
                      size: {
                        value: 2,
                        random: true,
                      },
                      shape: {
                        type: "circle",
                      },
                      move: {
                        enable: true,
                        direction: "bottom",
                        speed: 1,
                      },
                    },
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 w-full h-1/3 pointer-events-none bg-gradient-to-b from-gray-800 to-gray-900 transition-opacity opacity-0 group-hover:opacity-30 z-[-1]"></div>
        </button>
      )}
    </Tab>
  );
}
