import Sidebar from "../components/sidebar"
import Requests from "./Requests"
export default function Dashboard() {
    return (
        <>
        <div className="flex bg-[#F2F2F2] w-screen">
            <Sidebar />
            <div className="flex w-full max-w-6xl px-6 py-12">
            <Requests />
            </div>
        </div>
        </>
    )
}