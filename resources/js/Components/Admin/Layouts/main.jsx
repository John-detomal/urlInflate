import React, { lazy } from 'react';
import { usePage } from '@inertiajs/react'
import { Link } from '@inertiajs/react'

const Sidebar = lazy(() => import('./Sidebar'))
export default function AdminMainLayout({children}){
    const { auth } = usePage().props
    return (
        <>
            <Sidebar/>
            <header className="l-nav">
                <div className="m-header mgn-tp__2 pdg-rgt__3 pdg-lft__3 dpl-inl-flx wdt-full">
                    <a className="mobile-menu mgn-r-ato"
                        id="mobile-collapse1" href="#"
                        aria-label="fd"
                    >
                        <span>
                             {auth.user.name}
                        </span>
                    </a>
                    <Link href="/logout"
                        method="post" 
                        as="button"
                        className="b-brand"
                        aria-label="fd"
                    >
                        Logout
                    </Link>
                </div>
            </header>
            <div className="l-main-box">
                <div className="l-main-wrapper">
                        <div className="l-main-content">
                            <div className="l-main-inner-content">
                                {children}
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
