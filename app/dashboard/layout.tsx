import { DashboardLinks } from '@/app/components/DashboardsLinks';
import { ThemeToggle } from '@/app/components/ThemeToggle';
import { signOut } from '@/app/utils/auth';
import { useRequireUser } from '@/app/utils/hooks';
import { Button } from '@/components/ui/button';
import { DialogTitle } from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/public/logo.png';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
    const session = await useRequireUser();

    return (
        <Fragment>
            <div className='min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
                <div className='hidden md:block border-r bg-muted/40'>
                    <div className='flex h-full max-h-screen flex-col gap-2'>
                        <div className='flex gap-2 h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
                            <Link href='/'>
                                <Image src={Logo} alt='logo image' className='size-8' />
                            </Link>
                            <div className='flex text-2xl font-semibold '>
                                <h4>
                                    <span className=''>Cal</span>
                                    <span className='text-primary'>Marshal</span>
                                </h4>
                            </div>

                        </div>
                        <div className='flex-1'>
                            <nav className='grid items-start px-2 lg:px-4'>
                                <DashboardLinks />
                            </nav>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
                        <Sheet>
                            <SheetTrigger asChild={true}>
                                <Button variant='outline' size='icon' className=' shrink-0 md:hidden'>
                                    <MenuIcon />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side='left' className='flex flex-col'>
                                <DialogTitle></DialogTitle>
                                <nav className='grid gap-2 mt-5'>
                                    <DashboardLinks />
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <div className='ml-auto flex items-center gap-x-4'>
                            <ThemeToggle />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant='secondary' size='icon' className='rounded-full'>
                                        <img src={session?.user?.image as string} alt='Profile image' width={20} height={20} className='w-full h-full rounded-full' />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild className='cursor-pointer'>
                                        <Link href='/dashboard/settings'>Settings</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className='cursor-pointer'>
                                        <form className='w-full' action={async () => {
                                            'use server';
                                            await signOut();
                                        }}>
                                            <button className='w-full text-left'>Log out</button>
                                        </form>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>
                    <main className='flex flex-1 flex-col gap-4 p-4 lg:p-6 lg:gap-6'>
                        {children}
                    </main>
                </div>
            </div>
        </Fragment>
    );
}