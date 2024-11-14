import { useRequireUser } from '@/app/utils/hooks';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
    const session = await useRequireUser();

    if (!session?.user) return redirect('/');

    return (
        <div>
            <h1> Hello from the dashboard</h1>
        </div>
    );
}
