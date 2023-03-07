
export default function userMainLayout({children}){
    return (
        <>
            <header className="l-nav">
                <div className="m-header mgn-r-3 mgn-l-3">
                    <a className="mobile-menu"
                        id="mobile-collapse1" href="#"
                        aria-label="fd"
                    >
                        <span></span>
                    </a>
                    <a href="#"
                        className="b-brand"
                        aria-label="fd"
                    >
                        <img alt="" height="25px" src=""id="main-logo" />
                    </a>
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
