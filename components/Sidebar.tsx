"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface Sidebarprops {
    children: React.ReactNode;
}

const Sidebar: React.FC<Sidebarprops> = ({ children }) => {
    const pathname = usePathname();
    const routes = useMemo(
        () => [
            { label: "Home", active: pathname !== "/search", href: "/" },
            {
                label: "Search",
                active: pathname === "/search",
                href: "/search",
            },
        ],
        []
    );
    return <div>Sidebar</div>;
};

export default Sidebar;
