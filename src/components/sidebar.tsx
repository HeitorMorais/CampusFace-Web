import send from'../assets/send.svg'
import Send from './icons/Send'
import group from '../assets/group.svg'
import adminPanelSettings from '../assets/admin-panel-settings.svg'
import settings from '../assets/settings.svg'

type SideBarProps = {
    active: string
}

export default function Sidebar(props : SideBarProps) {
    return (
        <>
        <div className='flex flex-col justify-between h-screen w-20 p-4 bg-[#1C1B1F]'>
            <div className='grid gap-4'>
                <a href="/dashboard/requests"><Send color={`${props.active == "Requests" ? "#FFF" : "#BDBDBD"}`}/></a>
                <a href="/dashboard/members"><img src={group} alt="" /></a>
               <a href="/dashboard/verifiers"><img src={adminPanelSettings} alt="" /></a> 
                
            </div>
            <div>
                <img src={settings} alt="" />
            </div>
        </div>
        </>
    )
}