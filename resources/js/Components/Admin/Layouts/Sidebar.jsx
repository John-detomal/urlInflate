import SidebarItem from '../Sidebar/Items'
import { useState, useEffect } from 'react'

export default function DashboardSidebar(){

    const [scroll, setScroll] = useState (0)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 50
                if (scrollCheck !== scroll) {
                    setScroll(scrollCheck)
                }
            })
        })

    return (
        <div
            className={`
                l-sidebar
                ${scroll ? 'scroll-fixed' : ''}`
            }
        >

            <div className="l-sidebar-wrapper">
                <div
                    className="l-sidebar-content"
                >
                    <ul>
                        <SidebarItem/>
                    </ul>
                </div>
            </div>
        </div>
    )

}
