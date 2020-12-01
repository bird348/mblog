import Link from 'next/link';


export default function Tags({ getTagsData }) {
    
    return(
        <div>
            <h4 className="text-danger">Tags</h4>
            <hr className="border-danger" />
            <div className="justify-content-between">
                {getTagsData.map(tag => {
                    return(
                        <Link href={tag.tag_url} key={tag.id}>
                            <a className={"badge mr-2 " + tag.tag_color} > {tag.tag_title} </a>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}