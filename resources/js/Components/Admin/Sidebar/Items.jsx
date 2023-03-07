import { Link } from '@inertiajs/react'
import sidebar_items from "../Sidebar/sidebar.json"
import { usePage } from '@inertiajs/react'

export default function DashboardSidebarItem(){
    const {url} = usePage();
    const { auth } = usePage().props

    if(auth.user_type == 1){
        return(
            <>
                {
                    sidebar_items.admin.map((items, index) => (
                        <li key={index}>  
                            <Link href={items.link} className={`nav-link  drop ${url.startsWith(items.link) ? 'active' :  ''}`} >
                                <span className="jicon">
                                    <i className={items.icon}></i>
                                </span>
                                <span>{items.label}</span>
                                <span className="drp">
                                    <i className="uil uil-angle-right"></i>
                                </span>
                            </Link>
                        </li>
                    ))
                }
               
    
            </>
        )
    }else if(auth.user_type == 0){
        return(
            <>
                {
                    sidebar_items.user.map((items, index) => (
                        <li key={index}>  
                            <Link href={items.link} className={`nav-link  drop ${url.startsWith(items.link) ? 'active' :  ''}`} >
                                <span className="jicon">
                                    <i className={items.icon}></i>
                                </span>
                                <span>{items.label}</span>
                                <span className="drp">
                                    <i className="uil uil-angle-right"></i>
                                </span>
                            </Link>
                        </li>
                    ))
                }
               
    
            </>
        )
    }
   
}
