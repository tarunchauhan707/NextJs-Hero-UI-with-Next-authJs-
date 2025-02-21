"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionWrapperProps {
  children: ReactNode;
  session?: any; // You can refine this type based on your session object
}

const SessionWrapper: React.FC<SessionWrapperProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionWrapper;
