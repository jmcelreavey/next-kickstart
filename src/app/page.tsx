import Image from 'next/image';
import { Button, ButtonGroup } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-gray-700 p-24'>
      <Image
        width={1080}
        height={1920}
        src='/logo-no-background.svg'
        alt='ChoreBee logo'
      />
      <Card className='bg-yellow-200 p-4 text-gray-700'>
        <CardContent>
          ChoreBee is a task and reward system designed for kids. With ChoreBee,
          you can create custom tasks for your child to complete, and reward
          them with points that they can redeem for prizes or privileges.
        </CardContent>
      </Card>
      <ButtonGroup>
        <Button
          type='submit'
          className=' bg-yellow-200 px-4 py-2 text-lg font-bold text-gray-700 hover:bg-yellow-400 hover:shadow-lg'
        >
          Register
        </Button>
        <Button
          type='submit'
          className=' bg-yellow-200 px-4 py-2 text-lg font-bold text-gray-700 hover:bg-yellow-400 hover:shadow-lg'
        >
          Sign In
        </Button>
      </ButtonGroup>
    </main>
  );
}
