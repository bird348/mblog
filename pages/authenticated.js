import React from 'react';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAdmin';
import firebase from '../firebaseClient';


 function Authenticated({session}) {
     if(session) {
         return(
             <div className="container">
                 <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <h2 className="text-center">
                            Authenticated
                        </h2>
                        <hr />
                        <p className="text-center">
                            {session}
                        </p>
                        <p className="text-center">
                            You do anything now you are authenticated
                        </p>
                    </div>
                    <hr />
                    <div className="col-12 col-md-6">
                        <button className="btn btn-danger btn-block"
                        onClick={async () => {
                            await firebase.auth().signOut();
                            window.location.href = "/"
                        }}>Sign out</button>
                    </div>
                 </div>
             </div>
         )
     } else {
         return(
            <div className="text-center text-success mt-5">
                <p> Loading</p>
            </div>
         )
        
     }
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

 export default Authenticated;