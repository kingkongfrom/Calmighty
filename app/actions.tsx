'use server';

import prisma from '@/app/utils/db';
import { useRequireUser } from '@/app/utils/hooks';
import { onboardingSchemaValidation } from '@/app/utils/zodSchemas';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

export async function OnboardingAction(prevState: any, formData: FormData) {
    const session = await useRequireUser();

    const submission = await parseWithZod(formData, {
        schema: onboardingSchemaValidation({
            async isUsernameUnique() {
                const existingUsername = await prisma.user.findUnique({
                    where: { username: formData.get('username') as string },
                });
                return !existingUsername;
            },
        }),
        async: true,
    });

    if (submission.status !== 'success') return submission.reply();


    const data = await prisma.user.update({
        where: {
            id: session?.user?.id,
        },
        data: {
            username: submission.value.username,
            name: submission.value.fullName,
        },
    });

    return redirect('/dashboard');
}