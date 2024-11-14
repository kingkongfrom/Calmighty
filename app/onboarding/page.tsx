import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function OnboardingRoute() {
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
                <form>
                    <CardContent className='flex flex-col gap-y-5'>
                        <div className='grid gap-y-2'>
                            <Label>Full name</Label>
                            <Input placeholder='John Doe' />
                        </div>

                        <div className='grid gap-y-2'>
                            <Label>Username</Label>
                            <div className='flex rounded-md'>
                            <span
                                className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground'>
                                calmarshal.com
                            </span>
                                <Input placeholder='john-doe' className="rounded-l-none"/>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Submit</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}