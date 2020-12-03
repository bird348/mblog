import { useRouter } from 'next/router';
import firebase from '../../firebaseClient';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Comment from '../../components/Comment';

// แปลง String to tag html
{/* <div dangerouslySetInnerHTML={{__html: '<strong>strong text</strong>'}} /> */}
function DetailssBlog() {
    const router = useRouter();
    const { id  } = router.query;
    const textSm ={fontSize: "15px"};
    const [blog, setBlog] = useState({});
    
    useEffect(() => {
        if(id) {
            const docRef = firebase.firestore().collection("blog").doc(id);
            docRef.get().then((doc) => {
                setBlog(doc.data());
            })
        }
    }, [id])
   
    return(
        <Layout title="รายละเอียด">
            <div className="container col-md-8 mt-3">
                <div className=" shadow p-3 mb-5 bg-white rounded">
                    <h5 className="text-justify mb=2 font-weight-bold text-primary"> {blog.subject}</h5>
                    <p className="text-right text-muted mt-3 mb-2 font-italic float-right" style={{fontSize: "10px",}}> 
                        ผู้เขียน : <span className="text-success"> {blog.author} </span>
                        วันที่ : <span className="text-info"> {blog.create_date} </span>
                    </p>
                    <hr className="border-success" />
                    {blog.imageUrl_title && <img src={blog.imageUrl_title} alt={blog.category} style={{width: "100%", height:250}} />}
                    <p className="text-justify mt-3 text-muted" style={textSm} dangerouslySetInnerHTML={{__html: blog.title}} />
                    {blog.imageUrl_1 && <img src={blog.imageUrl_1} alt={blog.category} style={{width: "100%", height:250}} />}
                    <p className="text-justify mt-3 text-muted" style={textSm} dangerouslySetInnerHTML={{__html: blog.details_1}} />
                    {blog.imageUrl_2 && <img src={blog.imageUrl_2} alt={blog.category} style={{width: "100%", height:250}} />}
                    <p className="text-justify mt-3 text-muted" style={textSm} dangerouslySetInnerHTML={{__html: blog.details_2}} />
                    {blog.imageUrl_3 && <img src={blog.imageUrl_3} alt={blog.category} style={{width: "100%", height:250}} />}
                    <p className="text-justify mt-3 text-muted" style={textSm} dangerouslySetInnerHTML={{__html: blog.details_3}} />
                    {blog.imageUrl_4 && <img src={blog.imageUrl_4} alt={blog.category} style={{width: "100%", height:250}} />}
                    <p className="text-justify mt-3 text-muted" style={textSm} dangerouslySetInnerHTML={{__html: blog.details_4}} />
                    {blog.imageUrl_5 && <img src={blog.imageUrl_5} alt={blog.category} style={{width: "100%", height:250}} />}
                    <p className="text-justify mt-3 text-muted" style={textSm} dangerouslySetInnerHTML={{__html: blog.details_5}} />
                    <Comment id={id} />
                    <hr />
                    <div className="form-group">
                        <label htmlFor="comment_mblog">
                            แสดงความคิดเห็น
                        </label>
                        <textarea className="form-control" id="comment" rows="3"></textarea>
                    </div>
                    <button className="btn btn-success">ตกลง</button>
                </div>
            <Link href="/"><a className="btn btn-block btn-success text-center mb-3">ไปที่หน้าหลัก</a></Link>
            </div>
        </Layout>
    )
}

export default DetailssBlog;