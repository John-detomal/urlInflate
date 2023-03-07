
import { Link } from '@inertiajs/react'

export default function ({paginate}){
    const Next = ({link}) => (
       
            <Link href={link}>
             <i className="uil uil-angle-right fnt-sz__4"></i> 
            </Link>
   
    )

    const Prev = ({link}) => (
            <Link href={link}>
                <i className="uil uil-angle-left fnt-sz__4"></i> 
            </Link>
    )

    if(paginate.length > 3){
            return (
                <ul className='c-paginate'>
                {
                        paginate.map(item => {
                            if(item.label.includes('Next')){
                                return(
                                    <li key={item.label}>
                                        <Next key={item.label} link={item.url}/>
                                    </li>
                                )
                            }
                            else if(item.label.includes('Prev')){
                                
                                return (
                                    <li className='mgn-r-3' key={item.label}>
                                        <Prev key={item.label} link={item.url}/>
                                    </li>
                                )
                            }else{
                                return (
                                    <li 
                                        key={item.label}
                                        className={`
                                            
                                            ${item.label.includes('Next') ? '' : 'num mgn-r-3' }
                                            ${item.active == true ? 'active' : ''}`
                                        }
                                    >
                                    
                                        <Link href={item.url}>
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                   
                </ul>
            )
    }
}