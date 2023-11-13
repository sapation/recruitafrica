
import Profile from "@/componentPages/Profile";
import { redirect } from "next/navigation"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { useRouter } from "next/navigation";

type Props = {}

const getProfileData = async(id) => {
    const response = await fetch(`http://localhost:3000/api/profile/${id}`)

    if(response.ok) {
        return response.json();
    }
}

const profile = async({params}) => {
  const session = await getServerSession(authOptions);

  const { id } = params;
  const data = await getProfileData(id);

  if(!session) redirect("/login");
  return <Profile data={data}/>
}

export default profile