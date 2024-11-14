"use client"
import { Fragment } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import GoogleLogo from '@/public/google-logo.svg';
import GithubLogo from "@/public/github-logo.svg"
import Image from 'next/image';
import { Loader2 } from 'lucide-react';


export function GoogleAuthButton() {
    const { pending } = useFormStatus();

    return (
        <Fragment>
            {pending ?
                <Button disabled variant='outline' className='w-full'>
                    <Loader2 className='size-4 animate-spin' /> Please wait
                </Button>
                :
                <Button variant='outline' className='w-full'>
                    <Image src={GoogleLogo} alt='google logo image' className='size-4 mr-2' />
                    Sign in with Google
                </Button>}
        </Fragment>

    );
}

export function GithubAuthButton() {
    const { pending } = useFormStatus();

    return (
        <Fragment>
            {pending ?
                <Button disabled variant='outline' className='w-full'>
                    <Loader2 className='size-4 animate-spin' /> Please wait
                </Button>
                :
                <Button variant='outline' className='w-full'>
                    <Image src={GithubLogo} alt='google logo image' className='size-4 mr-2' />
                    Sign in with Github
                </Button>}
        </Fragment>

    );
}