import Sidebar from "../../components/sidebar"
import Requests from "./Requests"
import { ReactNode } from "react";


 type PageProp = {
  type: {
    name: string;
  };
  [key: string]: any;
};

type DashboardClientProps = {
  page: ReactNode & PageProp;
};

export default function Dashboard({page}: DashboardClientProps) {
  
    return (
        <>
        <div className="flex bg-[#F2F2F2] w-screen">
            <Sidebar active={page.type.name} />
            <div className="flex w-full max-w-6xl px-6 py-12">
                {page}
            </div>
        </div>
        </>
    )
}