import Link from 'next/link';

export default function Recommended({ getRecommendedData }) {
    return(
        <div>
            <h4 className="text-success">Recommended</h4>
            <hr className="border-success" />
            {getRecommendedData.map(recomm => {
                return(
                   <div key={recomm.id}>
                        <Link href={recomm.recommended_url}>
                            <a className=""> {recomm.recommended_title} </a>
                        </Link>
                        <br />
                   </div> 
                )
            })}
        </div>
    )
}