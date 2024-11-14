'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import GithubLogo from '@/public/github-logo.svg';
import GoogleLogo from '@/public/google-logo.svg';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';
import { useFormStatus } from 'react-dom';


export interface buttonProps {
    text: string;
    variant?: {
        secondary: string;
        default: string;
        outline: string;
        ghost: string;
        link: string;
        destructive: string;
    };
    className?: string;
}

export function SubmitButton({ text, variant, className }: buttonProps) {
    const { pending } = useFormStatus();
    return (
        <Fragment>
            {pending ? (
                <Button disabled variant='outline' className={cn("w-fit", className)}>
                    <Loader2 className='size-4 mr-2 animate-spin' />
                </Button>
            ) : (
                <Button type='submit' variant={variant} className={cn("w-fit", className)}>{text}</Button>
            )}
        </Fragment>
    );
}

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