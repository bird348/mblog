import Link from 'next/link';
import { useEffect, useState } from 'react';
import firebase from '../firebaseClient';


function Comment(props) {
  const textSm ={fontSize: "12px"};
  const [like, setLike] = useState(props.like);
  const [unLike, setUnLike] = useState(props.unlike);
  const [visitors, setVisitors] = useState(props.visitors);

  
  function updateBlog(val) {
    const docRef = firebase.firestore().collection("blog").doc(props.id);
    docRef
    .update(val)
    .then(() => {
      console.log("you like")
    })
    .catch(err => {
      console.log(err);
    })
  }

  function handleClick(val) {
    if(val === "like") {
      setLike(like++);
      updateBlog({like: like})
    }
    if(val === "unlike") {
      setUnLike(unLike++);
      updateBlog({unLike: unLike})
    }
  }

  return(
    <p className="pr-2 pl-2 text-muted" style={textSm}>
      <span className="mr-1">
        {like} 
        <span className="btn btn-sm" >
          <img className="mb-2" alt="mblog-like" src="https://img.icons8.com/material-sharp/18/000000/facebook-like.png"/>
        </span>
      </span>
        
      <span className="mr-1">
        {unLike} 
        <span className="btn btn-sm">
          <img className="mb-1" alt="mblog-unlike" src="https://img.icons8.com/material-rounded/18/000000/thumbs-down.png"/>
        </span>
      </span>

      <span className="mr-1">
        {visitors} 
          <img className="mb-1 ml-2" alt="mblog-visitor" src="https://img.icons8.com/material-rounded/18/000000/visible.png"/>
      </span>

      <span className="float-right mt-1">
        {props.comments_count}
      <Link href={{
      pathname: "/details",
      query: {
          id: props.id,
        } 
      }}>
        <a className="ml-2">
          แสดงความคิดเห็น
        </a>
      </Link>
      </span>
    </p>
  )
}

export default Comment;