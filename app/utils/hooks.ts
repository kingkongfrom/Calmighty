import { auth } from '@/app/utils/auth';
import { redirect } from 'next/navigation';

export async function useRequireUser() {
    const session = await auth();

   // if (!session?.user) return redirect('/');

    return session;
}
