import Layout from '../../components/Layout';
import FormCreateBlog from '../../components/FormCreateBlog';
import { useAuth } from '../../auth';
import Link from 'next/link';
import React from 'react';
import nookies from 'nookies';
import { verifyIdToken } from '../../firebaseAdmin';

export default function CreateBlog() {
    const { email } = useAuth();
    
    return(
        <Layout title="Creat blog">
            {email && 
                <div>
                    <p className="text-success mt-2 mb-2 pl-4">สวัสดี : {email}
                        <Link href="/authenticated">
                            <a className="pl-3">ออกจากระบบ</a>
                        </Link> 
                     </p>    
                </div>
            }
            <hr />
            <FormCreateBlog />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    try {
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);
        const {uid, email} = token;
        return {
            props: { session: `Your Email is ${email} and your UID is ${uid}.` },
        }
    } catch (err) {
        context.res.writeHead(302, {location: "/login"});
        context.res.end();
        return { props: [] };
    }
}