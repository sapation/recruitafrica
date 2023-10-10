
import Dashboard from "@/pages/Dashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {}

const dashboard = (props: Props) => {

  return <Dashboard />
}

export default dashboard