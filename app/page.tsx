import Navbar from '@/app/components/Navbar';
import { useRequireUser } from '@/app/utils/hooks';
import { redirect } from 'next/navigation';

export default async function Home() {

    const session = await useRequireUser();

    if (session?.user) return redirect('/dashboard');
    return (
        <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'>
            <Navbar />
        </div>
    );
}
