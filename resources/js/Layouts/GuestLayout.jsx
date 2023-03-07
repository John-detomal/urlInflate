

export default function Guest({ children }) {
    return (
        <div className="txt-color__black">
            <div className="box hgt-full__vh c-bg-color-ash-gray">
                <div className="body-box">
                    <div className="dpl-inl-flx wdt-full">
                       
                            <div className="card mgn-t-5 wdt-sz__md mgn-ato">
                                <div className="card-body">
                                    {children}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
