"use client";
import { navlinks } from "@/constants/navlinks";
import { references } from "@/constants/references";
import { socials } from "@/constants/socials";
import { isMobile } from "@/lib/utils";
import { Navlink } from "@/types/navlink";
import {
  IconExternalLink,
  IconLayoutSidebarRightCollapse,
  IconSchool,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Badge } from "./Badge";
import { Heading } from "./Heading";
import { LinkPreview } from "./ui/link-preview";
import { Separator } from "./ui/separator";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6  z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div
              onClick={() => isMobile() && setOpen(false)}
              className="fixed bottom-4 left-4"
            >
              <Badge href="/resume" text="Zobacz CV" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-12 w-12 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-6 w-6 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Linki
      </Heading>
      {socials.map((link: Navlink) => (
        <LinkPreview
          url={link.href}
          key={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
          <IconExternalLink className="h4 w-4 flex-shrink-0 opacity-80" />
        </LinkPreview>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Referencje
      </Heading>
      {references.map((link: Navlink) => (
        <Link
          href={link.href}
          target="_blank"
          key={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
          <IconExternalLink className="h4 w-4 flex-shrink-0 opacity-80" />
        </Link>
      ))}
      <Separator />
      <Link
        href={"/files/stypendium.pdf"}
        target="_blank"
        className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
      >
        <IconSchool
          className={twMerge(
            "h-4 w-4 flex-shrink-0",
            isActive("/files/stypendium.pdf") && "text-sky-500"
          )}
        />
        <span>Stypendium</span>
        <IconExternalLink className="h4 w-4 flex-shrink-0 opacity-80" />
      </Link>
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src="/images/145283213.jpeg"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Kacper Machaj</p>
        <p className="font-light text-secondary">Programista</p>
      </div>
    </div>
  );
};
