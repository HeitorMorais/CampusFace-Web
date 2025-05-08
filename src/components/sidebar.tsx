import send from'../assets/send.svg' 
import group from '../assets/group.svg'
import adminPanelSettings from '../assets/admin-panel-settings.svg'
import settings from '../assets/settings.svg'

export default function Sidebar() {
    return (
        <>
        <div className='flex flex-col justify-between h-screen w-20 p-4 bg-[#1C1B1F]'>
            <div className='grid gap-4'>
                <img src={send} alt="" />
                <img src={group} alt="" />
                <img src={adminPanelSettings} alt="" />
                
            </div>
            <div>
                <img src={settings} alt="" />
            </div>
        </div>
        </>
    )
}