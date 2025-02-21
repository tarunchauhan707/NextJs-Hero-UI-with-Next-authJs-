'use client'
import {useSession, signIn, signOut} from 'next-auth/react';
import { Card } from "@heroui/card"; 
import { Button } from "@heroui/button";


export default function Home() {
  const { data: session } = useSession();

      if(session){
          return (
            <div className="mt-4">
              <Card className="p-4">
              <h1>Hello, {session.user?.name}</h1>
              <button onClick={() => signOut()}>Sign out</button>
              </Card>
              </div>
      );
   }

    return (
      <div className="flex flex-col items-center justify-center">
         
        <Card className="p-4 items-center">
        <h1>Not signed in</h1>
        <p>Sign in to get started.</p>

        <Button 
            className="mt-4"
            color="default" 
            onClick={() => signIn()}>Sign in
        </Button>

        </Card>
        </div>
    );
}
