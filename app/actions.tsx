'use server';

import prisma from '@/app/utils/db';
import { useRequireUser } from '@/app/utils/hooks';

export async function OnboardingAction(formData: FormData) {
    const session = await useRequireUser();
    const data = await prisma.user.update({
        where: {
            id: session?.user?.id,
        },
        data: {
            username: "john-doe",
            name: "John Doe"
        }
    });
}