import EditProfile from '@/componentPages/EditProfile'
import React from 'react'

const getProfileData = async(id:Number) => {
    const response = await fetch(`http://localhost:3000/api/profile/${id}`)

    if(response.ok) {
        return response.json();
    }
}

const page = async({params}:{params: any}) => {

    const { id } = params;
  const data = await getProfileData(id);
  return <EditProfile data={data} id={id}/>
}

export default page