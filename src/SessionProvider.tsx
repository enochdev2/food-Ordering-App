'use client';

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Provider = ({ children, session }:{children:ReactNode, session: any}) => (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
)

export default Provider;