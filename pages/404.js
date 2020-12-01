import Link from "next/link"
import Head from  'next/head';


export default function Error404() {
    return(
        <>
            <Head>
                <title>404 Not Found</title>
            </Head>
            <div className="container col-10 col-md-8 text-center mt-5" style={{height: "100%"}}>
                <h2 className="text-danger">Page not found</h2>
                <p className="text-muted text-justify text-center mt-5 mb-5">
                    หน้าที่คุณต้องการค้นหาไม่มีอยู่แล้ว
                    หรือหน้าเพจนี้อาจถูกย้ายไปที่อื่น
                </p>
                <Link href="/">
                    <a className="text-primary">
                        <p>กลับไปหน้าหลัก</p>
                    </a>
                </Link>
            </div>
        </>
        
    )
}