import AuthModal from '@/app/components/AuthModal';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='flex py-5 items-center justify-between'>
            <div className='flex gap-2'>
                <Link href='/'>
                    <Image
                        src='/logo.png'
                        alt='image logo'
                        className='size-10'
                        width={100}
                        height={100}
                    />
                </Link>

                <div className='flex text-3xl font-semibold'>
                    <h4>
                        <span className=''>Cal</span>
                        <span className='text-primary'>Marshal</span>
                    </h4>
                </div>
            </div>
            <AuthModal />
        </div>
    );
}
