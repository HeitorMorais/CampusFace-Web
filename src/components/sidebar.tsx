import settings from '../assets/settings.svg'
import RequestsIcon from './icons/RequestsIcon'
import MembersIcon from './icons/MembersIcon'
import VerifiersIcon from './icons/VerifiersIcon'

type SideBarProps = {
    active: string
}

export default function Sidebar(props : SideBarProps) {
    return (
        <>
        <div className='flex flex-col justify-between h-screen w-20 p-4 bg-[#1C1B1F]'>
            <div className='grid gap-4'>
                <a href="/dashboard/requests"><RequestsIcon color={`${props.active == "Requests" ? "#FFF" : "#BDBDBD"}`}/></a>
                <a href="/dashboard/members"><MembersIcon color={`${props.active == "Members" ? "#FFF" : "#BDBDBD"}`}/></a>
                <a href="/dashboard/verifiers"><VerifiersIcon color={`${props.active == "Verifiers" ? "#FFF" : "#BDBDBD"}`}/></a> 
                
            </div>
            <div>
                <img src={settings} alt="" />
            </div>
        </div>
        </>
    )
}