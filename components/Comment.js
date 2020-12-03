import Link from 'next/link';

function Comment({ id }) {
    const textSm ={fontSize: "15px"};
    return(
      <p className="pr-2 pl-2 text-muted" style={textSm}>
        <span className="mr-3">
          20 
          <img className="ml-1 mb-2" src="https://img.icons8.com/material-sharp/20/000000/facebook-like.png"/>
        </span>
        <span className="mr-3">
          50 
          <img className="ml-1" src="https://img.icons8.com/material-rounded/20/000000/thumbs-down.png"/>
        </span>
        <span>
          100
          <img className="ml-1 mb-1" src="https://img.icons8.com/material-rounded/20/000000/visible.png"/>
        </span>
        <span className="float-right">
          120
        <Link href={{
        pathname: "/details",
        query: {
            id: id,
          } 
        }}>
          <a className="ml-1">
            แสดงความคิดเห็น
          </a>
        </Link>
        </span>
      </p>
    )
  }
  export default Comment;