'use client';
import { cn } from '@/lib/utils';
import { CalendarCheck, HomeIcon, SettingsIcon, Users2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment } from 'react';

interface NavigationProps {
    id: number;
    name: string;
    href: string;
    icon: React.ComponentType;
}

export const dashBoardLinks: NavigationProps[] = [
    {
        id: 0,
        name: 'Event Types',
        href: '/dashboard',
        icon: HomeIcon,
    },
    {
        id: 1,
        name: 'Meetings',
        href: '/dashboard/meetings',
        icon: Users2,
    },
    {
        id: 2,
        name: 'Availability',
        href: '/dashboard/availability',
        icon: CalendarCheck,
    },
    {
        id: 3,
        name: 'Settings',
        href: '/dashboard/settings',
        icon: SettingsIcon,
    },
];

export function DashboardLinks() {
    const pathName = usePathname();

    const baseClasses = 'flex items-center gap-2 py-2 px-4 transition-all hover:text-foreground';
    const activeClasses = 'text-primary bg-primary/10';
    const inactiveClasses = 'text-muted-foreground';

    return (
        <Fragment>
            {dashBoardLinks.map((link) => {
                const Icon = link.icon;
                const linkClasses = cn(baseClasses, pathName === link.href ? activeClasses : inactiveClasses);
                return (
                    <Link key={link.id} href={link.href} className={linkClasses}>
                        <Icon className='w-5 h-5' />
                        {link.name}
                    </Link>
                );
            })}
        </Fragment>
    );
}
