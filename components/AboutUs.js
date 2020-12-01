import Link from "next/link"

export default function AboutUs() {
    return(
        <div>
            <h4 className="text-primary">About me
            <span className="float-right mt-2">
                <img src="https://firebasestorage.googleapis.com/v0/b/sampleblog-by-b.appspot.com/o/my_images%2FFB_IMG_1519637372720.jpg?alt=media&token=b0765342-7dd5-4d24-9092-8edacce6b574"
                    style={{borderRadius: 100, width: 50, height: 50}}
                />
            </span>
            </h4>
            <hr style={{borderColor: "red"}} />
            <p className="text-success" style={{fontSize: "15px"}}>
                สวัสดีครับชาวโลก
            </p>
            <p className="text-justify text-muted" style={{fontSize: "15px"}}>
            เราต้องไม่รอให้สิ่งต่าง ๆ เกิดขึ้นเอง และเชื่อว่าพวกมันจะถูกตัดสินโดยชะตากรรมที่ไม่อาจหลีกเลี่ยงได้ ถ้าเราต้องการมัน เราก็ต้องทำอะไรซักอย่าง <br /><br />
            *** Erwin Schrodinger ***
            </p>
            <div>
                <Link href="https://web.facebook.com/bird348">
                    <a >
                        <img src="https://img.icons8.com/color/30/000000/facebook-circled.png"/>
                    </a>
                </Link>
                <Link href="https://line.me/ti/p/Tg2NIj8sOd">
                    <a >
                        <img src="https://img.icons8.com/color/30/000000/line-me.png"/>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <img src="https://img.icons8.com/color/30/000000/twitter-circled.png"/>
                    </a>
                </Link>
            </div>
        </div>
    )
}