import { auth } from '@/app/utils/auth';
import { redirect } from 'next/navigation';

export async function useRequireUser() {
    const session = await auth();
    return session;
}
