import { GithubAuthButton, GoogleAuthButton } from '@/app/components/SubmitButtons';
import { signIn } from '@/app/utils/auth';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Logo from '@/public/logo.png';
import Image from 'next/image';

export default function AuthModal() {
    return (
        <Dialog>
            <DialogTrigger asChild={true}>
                <Button>Try for Free</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[360px]'>
                <DialogHeader>
                    <div className='flex gap-2'>

                        <Image src={Logo} alt='Logo' className='size-10' />
                        <div className='flex text-3xl font-semibold'>
                            <h4>
                                <span className=''>Cal</span>
                                <span className='text-blue-500'>Marshal</span>
                            </h4>
                        </div>
                    </div>
                </DialogHeader>

                <DialogTitle></DialogTitle>
                <div className='flex flex-col gap-2 mt-5'>
                    <form action={async () => {
                        'use server';
                        await signIn('google');
                    }}
                          className='w-full'>
                        <GoogleAuthButton />
                    </form>
                    <form action={async () => {
                        'use server';
                        await signIn('github');
                    }}>
                        <GithubAuthButton />
                    </form>
                </div>

            </DialogContent>
        </Dialog>
    );
}
