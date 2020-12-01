import Layout from '../components/Layout';
import Link from 'next/link';
import AboutUs from '../components/AboutUs';
import Tags from '../components/Tags';
import Recommended  from '../components/Recommended ';
import firebase from '../firebaseClient';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import { CommentsCount, Like } from 'react-facebook'; 

export function getData(collec, order) {

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
      firebase
      .firestore()
      .collection(collec)
      .orderBy(order, "desc")
      .limit(10)
      .onSnapshot((snapshot) => {
          const newDoc = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
          }))
          setBlogData(newDoc);
      })
  }, [collec, order])
  return blogData;
}

export default function Home() {
  let blog = {blogCollec: "blog", blogOrder: "create_date"};
  let tags = {tagCollec: "tags", tagOrder: "tag_title"};
  let recommended = {recommendedCollec: "recommended", recommendedOrder: "recommended_title"};
  const blogData = getData(blog.blogCollec, blog.blogOrder);
  const tagsData = getData(tags.tagCollec, tags.tagOrder);
  const recommendedData = getData(recommended.recommendedCollec, recommended.recommendedOrder);
  const {user} = useAuth();
  const textSm ={fontSize: "15px"};

  function renderBlog() {
    if(blogData) {
      return(
        blogData.map(blog => { 
        return(
          <div className="col-12 shadow p-3 mb-5 bg-white rounded" key={blog.id}>
            <h5 className="text-justify mb-2 font-weight-bold text-primary"> {blog.subject}</h5>
            <p className="text-right text-muted mt-3 mb-2 font-italic float-right" style={{fontSize: "10px",}}> 
                ผู้เขียน :<span className="text-success"> {blog.author} </span>
                วันที่ :<span className="text-info"> {blog.create_date} </span>
            </p>
            <hr className="border-success" />
            <img src={blog.imageUrl_title} alt={blog.category} style={{width: "100%", height: 200}} />
            <p className="mt-3 text-muted text-justify" style={textSm} dangerouslySetInnerHTML={{__html: blog.title}} />
            <div>

              <Link href={{
              pathname: "/details",
              query: {
                  id: blog.id,
                  urlId: document.URL + blog.id
                } 
              }}>
                <a className="float-right ml-3" style={textSm}>
                  ความคิดเห็น
                </a>
              </Link>

              <span className="text-right pr-5 text-muted">
                <CommentsCount href={document.URL + blog.id} />
              </span>

              <Link href={{
              pathname: "/details",
              query: {
                  id: blog.id,
                  urlId: document.URL + blog.id
                },
              }}>
                <a className="btn btn-block btn-outline-success" style={textSm}>
                  อ่านต่อ...
                </a>
              </Link>
            </div>
            
          </div>
        )
      })
      )
    }
  }
  
  return (
     <Layout title="หน้าหลัก">
       <div className="container">
         <div className="text-success text-right">
            {user && <Link href="/create"><a className="btn btn-outline-success mb-3 mr-3">ไปหน้าเขียน Blog</a></Link>}
         </div>
        <div className="row d-flex justify-content-around pt-3">
          <div className="col-11 col-md-8">
            <div className="row">
              {renderBlog()}
            </div>
          </div>
          <div className="col-11 col-md-3">
            <div className="row">
              <div className="col-12 shadow p-3 mb-5 bg-white rounded">
                <AboutUs />
              </div>
              <div className="col-12 shadow p-3 mb-5 bg-white rounded">
                <Recommended getRecommendedData={recommendedData} />
              </div>
              <div className="col-12 shadow p-3 mb-5 bg-white rounded">
                <Tags getTagsData={tagsData} />
              </div>
            </div>
          </div>
        </div>
       </div>
     </Layout>
  )
}
