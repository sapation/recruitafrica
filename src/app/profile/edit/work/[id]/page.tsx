import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import EditWork from '@/componentPages/EditWork'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

const getWorkData = async(id:Number) => {
    const response = await fetch(`api/profile/edit/work/${id}`)

    if(response.ok) {
        return response.json();
    }
}

const page = async({params}:{params:any}) => {
  const session = await getServerSession(authOptions);

  const { id } = params;
  const data = await getWorkData(id);

  if(!session) redirect("/login");

  return <EditWork  data={data}/>
}

export default page