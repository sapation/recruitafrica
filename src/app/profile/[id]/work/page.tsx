import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Work from '@/componentPages/Work'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async({params}:{params: any}) => {
  const session = await getServerSession(authOptions);

    const { id } = params;
    if(!session) redirect("/login");
  return <Work id={id} />
}

export default page