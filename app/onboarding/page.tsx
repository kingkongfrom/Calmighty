'use client';
import { OnboardingAction } from '@/app/actions';
import { SubmitButton } from '@/app/components/SubmitButtons';
import { onboardingSchema } from '@/app/utils/zodSchemas';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';

export default function OnboardingRoute() {
    const [lastResult, action] = useActionState(OnboardingAction, undefined);
    const [form, fields] = useForm({
        lastResult, onValidate({ formData }) {
            return parseWithZod(formData, {
                schema: onboardingSchema,
            });
        },
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    });

    return (
        <div className='min-h-screen w-screen flex items-center justify-center'>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Welcome to Cal<span className='text-primary'>Marshal</span>
                    </CardTitle>
                    <CardDescription>
                        We need the following information to set up your profile!
                    </CardDescription>
                </CardHeader>
                <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
                    <CardContent className='flex flex-col gap-y-5'>
                        <div className='grid gap-y-2'>
                            <Label>Full name</Label>
                            <Input
                                name={fields.fullName.name}
                                defaultValue={fields.fullName.initialValue}
                                key={fields.fullName.key}
                                placeholder='John Doe'
                            />
                            <p className='text-red-500 text-sm'>{fields.fullName.errors}</p>
                        </div>

                        <div className='grid gap-y-2'>
                            <Label>Username</Label>
                            <div className='flex rounded-md'>
                                <span
                                    className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground'>
                                    calmarshal.com
                                </span>
                                <Input
                                    name={fields.username.name}
                                    defaultValue={fields.username.initialValue}
                                    key={fields.username.key}
                                    placeholder='john-doe'
                                    className='rounded-l-none'
                                />
                            </div>
                            <p className='text-red-500 text-sm'>{fields.username.errors}</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <SubmitButton text="Submit" className="w-full"/>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}