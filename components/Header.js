import Link from 'next/link';
import { useAuth } from '../auth';


export default function Header() {
    const {user, email} = useAuth();
    return(
        <div className="shadow p-2 mb-5 bg-white rounded sticky-top" style={{height: "20%"}}>
            <div className="container bg-white">
                <Link href="/">
                    <a>
                        <img src="/mBlog.ico" alt="mBlog" className="ml-2" style={{height: "70px"}} />
                    </a>
                </Link>
            
                {
                !user && 
                    <Link href="/login">
                        <a className="float-right btn btn-outline-success mt-3 mr-3">
                            Login
                        </a>
                    </Link>
                }
                {
                    email && 
                    <Link href="/authenticated">
                        <a className="text-right mt-4 fixed-top mt-5 mr-2" style={{fontSize: "12px"}}><span className="text-success"> {email} </span></a>
                    </Link>
                }
            </div>
            
        </div>
    )
}