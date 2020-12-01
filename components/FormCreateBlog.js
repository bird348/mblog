import { useState } from 'react';
import firebase from '../firebaseClient'
import FormBlog from './form/FormBlog';
import FormUploadFile from '../components/form/FormUploadFile';
import ModalPreview from '../components/preview/ModalPreview';
import Link from 'next/link';

function UploadImage(props) {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [partImage, setPartImage] = useState("");
    const [checkPart, setCheckPart] = useState([]);
    const [msg, setMsg] = useState("");
    const [msgSave, setMsgSave] = useState("");
    const [alertUpload, setAlertUpload] = useState("");
    // Form
    const [subject, setSubject] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    // const [create_date, setCreate_date] = useState(new Date());

    const [imageUrl_title, setImageUrl_title] = useState("");
    const [imageUrl_1, setImageUrl_1] = useState("");
    const [imageUrl_2, setImageUrl_2] = useState("");
    const [imageUrl_3, setImageUrl_3] = useState("");
    const [imageUrl_4, setImageUrl_4] = useState("");
    const [imageUrl_5, setImageUrl_5] = useState("");
    
    const [imageName_title, setImageName_title] = useState("");
    const [imageName_1, setImageName_1] = useState("");
    const [imageName_2, setImageName_2] = useState("");
    const [imageName_3, setImageName_3] = useState("");
    const [imageName_4, setImageName_4] = useState("");
    const [imageName_5, setImageName_5] = useState("");
    
    const [details_1, setDetails_1] = useState("");
    const [details_2, setDetails_2] = useState("");
    const [details_3, setDetails_3] = useState("");
    const [details_4, setDetails_4] = useState("");
    const [details_5, setDetails_5] = useState("");

    function handleChangeUploadFile(e) {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
        setProgress(0);
    }

    function deleteImage(imgN, check) {
        if(imgN && check) {
            let newCheck = checkPart.filter(function(value) { return value !== check })

            const storageRef = firebase.storage().ref().child(`${props.folder}/${imgN}`);
            storageRef.delete().then(() => {
                console.log("ลบภาพสำเร็จ");
            }).catch(error => {
                console.log("ลบภาพไม่สำเร็จ : ", error)
            })

            switch(check) {
                case "_title":
                    setImageName_title("");
                    setImageUrl_title("");
                    setCheckPart(newCheck);
                    break;
                case "_1": 
                    setImageName_1("");
                    setImageUrl_1("");
                    setCheckPart(newCheck);
                    break;
                case "_2": 
                    setImageName_2("");
                    setImageUrl_2("");
                    setCheckPart(newCheck);
                    break;
                case "_3": 
                    setImageName_3("");
                    setImageUrl_3("");
                    setCheckPart(newCheck);
                    break;
                case "_4": 
                    setImageName_4("");
                    setImageUrl_4("");
                    setCheckPart(newCheck);
                    break;
                case "_5": 
                    setImageName_5("");
                    setImageUrl_5("");
                    setCheckPart(newCheck);
                    break;
                default: console.log("ลบชื่อรูปภาพ / ที่อยู่รูปภาพไม่สำเร็จ")
            }
        }
    }

    function handleSubmitUploadFile(e) {
        e.preventDefault();
        const partImageFind = checkPart.find(function(value) { return value === partImage });
        if(image && partImage) {
            if(image.size < (1 * 1024 * 1024)) {
                if(image.type === ("image/jpeg" || "image/png" || "image/jpg" || "image/JPG" || "image/JPEG" || "image/PNG")) {
                    const image_name = image.name.toString();
                    if(partImageFind === partImage || image_name == (imageName_title || imageName_1 || imageName_2 || imageName_3 || imageName_4 || imageName_5)) {
                        return;
                    } else{
                        const storageRef = firebase.storage().ref().child(`${props.folder}/${image.name}`).put(image);
                        storageRef
                        .on("state changed", snapshot => {
                            const newProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                            setProgress(newProgress);
                        }, error => {
                            console.log("อัพโหลดไม่สำเร็จ", error);
                        }, () => {
                            storageRef.snapshot.ref.getDownloadURL().then(urlDownload => {
                                switch(partImage) {
                                    case "_title": 
                                        setImageName_title(image_name);
                                        setImageUrl_title(urlDownload);
                                        break;
                                    case "_1": 
                                        setImageName_1(image_name);
                                        setImageUrl_1(urlDownload);
                                        break;
                                    case "_2": 
                                        setImageName_2(image_name);
                                        setImageUrl_2(urlDownload);
                                        break;
                                    case "_3": 
                                        setImageName_3(image_name);
                                        setImageUrl_3(urlDownload);
                                        break;
                                    case "_4": 
                                        setImageName_4(image_name);
                                        setImageUrl_4(urlDownload);
                                        break;
                                    case "_5": 
                                        setImageName_5(image_name);
                                        setImageUrl_5(urlDownload);
                                        break;

                                    default: console.log("บันทึกรูปภาพไม่สำเร็จ")
                                }
                                setImage(null);
                                setCheckPart(checkPart.concat(partImage));
                            })
                        })
                    }
                } else {
                    setAlertUpload("ชนิดไฟล์ภาพต้องเป็น .jpeg, .png เท่านั้น");
                }
            } else {
                setAlertUpload("ขนาดภาพไม่เกิน 1mb/1024kb");
            }
        }
    }

    function handleChangeForm(even) {
        let val = even.target.value;
        let nam = even.target.name;

        if(nam === "selectPart") {
            setPartImage(val);
        }

        if(nam === "subject" ) {
            setSubject(val)
        }
        if(nam === "title" ) {
            setTitle(val)
        }
        if(nam === "author" ) {
            setAuthor(val)
        }
        if(nam === "category" ) {
            setCategory(val)
        }
        if(nam === "details_1"  ) {
            setDetails_1(val)
        }
        if(nam === "details_2"  ) {
            setDetails_2(val)
        }
        if(nam === "details_3"  ) {
            setDetails_3(val)
        }
        if(nam === "details_4"  ) {
            setDetails_4(val)
        }
        if(nam === "details_5") {
            setDetails_5(val)
        }
        setMsg("");
    }
    function createData(value) {
        firebase
        .firestore()
        .collection("blog")
        .doc()
        .set(value)
        .then(function() {
            setMsgSave("บันทึกเรียบร้อย !")
        })
        .catch(function(error) {
            console.log("Data error: ", error)
        })
    }

    function handleSubmitForm(event) {
        event.preventDefault();
        let alertMsg = "";
        const newForm = {
            subject: subject,
            author: author,
            category: category,
            create_date: new Date().toLocaleString(),
            imageName_title: imageName_title,
            imageName_1: imageName_1,
            imageName_2: imageName_2,
            imageName_3: imageName_3,
            imageName_4: imageName_4,
            imageName_5: imageName_5,
            imageUrl_title: imageUrl_title,
            imageUrl_1: imageUrl_1,
            imageUrl_2: imageUrl_2,
            imageUrl_3: imageUrl_3,
            imageUrl_4: imageUrl_4,
            imageUrl_5: imageUrl_5,
            title: title,
            details_1: details_1,
            details_2: details_2,
            details_3: details_3,
            details_4: details_4,
            details_5: details_5
        }
        if(subject && author && category && title && imageUrl_title) {
            createData(newForm);
        } else {
            alertMsg = "* จำเป็นต้องป้อนข้อมูล";
        }
        setMsg(alertMsg);
    }

    function selectPart() {
        return(
            <div>
                <div className="form-group pl-1 mt-1">
                    <label><h6 className="text-warning mt-3">เลือกตำแหน่งอัพโหลดรูปภาพ</h6></label>
                    <select name="selectPart" className="form-control col-6" onChange={handleChangeForm}>
                        <option>เลือกที่เก็บรูปภาพ</option>
                        <option value="_title">title</option>
                        <option value="_1">ส่วนที่ 1</option>
                        <option value="_2">ส่วนที่ 2</option>
                        <option value="_3">ส่วนที่ 3</option>
                        <option value="_4">ส่วนที่ 4</option>
                        <option value="_5">ส่วนที่ 5</option>
                    </select>
                </div>
            </div>
        )
    }

    function checkProps() {
        setModalShow(true)
    } 

    function handleClose() {
        setMsg("");
        setMsgSave("");
        setProgress(0);
        setPartImage("");
        setCheckPart([]);

        setSubject("");
        setTitle("");
        setAuthor("");
        setCategory("");

        setImageName_title("");
        setImageName_1("");
        setImageName_2("");
        setImageName_3("");
        setImageName_4("");
        setImageName_5("");

        setImageUrl_title("");
        setImageUrl_1("");
        setImageUrl_2("");
        setImageUrl_3("");
        setImageUrl_4("");
        setImageUrl_5("");

        setDetails_1("");
        setDetails_2("");
        setDetails_3("");
        setDetails_4("");
        setDetails_5("");
    }

    const buttonPreview = <Link href={{pathname: "/", query: {admin: "admin"}}}><a className="btn btn-warning mr-2">Preview page</a></Link>
    const buttonDeleteImage = <button className="btn btn-danger" onClick={() => checkProps()}>ลบรูปภาพ</button>
    const closeButton = <button className="btn btn-danger float-right" onClick={() => handleClose()}>ปิด</button>

    return(
        <div className="container">
            <FormUploadFile 
                onHandleChangeUploadFile = {handleChangeUploadFile}
                onHandleSubmitUploadFile = {handleSubmitUploadFile}
                refProgress = {progress}
                onButtonPreview = {buttonPreview}
                onButtonDeleteImage = {buttonDeleteImage}
                onSelectPart = {selectPart()}
            />
           
            <FormBlog 
                onHandleSubmitForm = {handleSubmitForm}
                onHandleChangeForm = {handleChangeForm}
                onCloseButton = {closeButton}

                subject = {subject}
                title = {title}
                author = {author}

                imageurl_title = {imageUrl_title}
                imageurl_1 = {imageUrl_1}
                imageurl_2 = {imageUrl_2}
                imageurl_3 = {imageUrl_3}
                imageurl_4 = {imageUrl_4}
                imageurl_5 = {imageUrl_5}

                imagename_title = {imageName_title}
                imagename_1 = {imageName_1}
                imagename_2 = {imageName_2}
                imagename_3 = {imageName_3}
                imagename_4 = {imageName_4}
                imagename_5 = {imageName_5}

                details_1 = {details_1}
                details_2 = {details_2}
                details_3 = {details_3}
                details_4 = {details_4}
                details_5 = {details_5}

                msg = {msg}
                msgSave = {msgSave}
            />
            
            <ModalPreview
                show={modalShow}
                onHide={() => setModalShow(false)}
                onDeleteImage = {deleteImage}
                checkpart = {checkPart}
                imageurl_title = {imageUrl_title}
                imageurl_1 = {imageUrl_1}
                imageurl_2 = {imageUrl_2}
                imageurl_3 = {imageUrl_3}
                imageurl_4 = {imageUrl_4}
                imageurl_5 = {imageUrl_5}

                imagename_title = {imageName_title}
                imagename_1 = {imageName_1}
                imagename_2 = {imageName_2}
                imagename_3 = {imageName_3}
                imagename_4 = {imageName_4}
                imagename_5 = {imageName_5}
            />
            {
                alertUpload ? 
                <div className="container col-10 col-md-6 fixed-bottom mb-5 bg-light text-center">
                    <h5 className="text-danger mt-3">
                        เตือน
                        <button className="btn btn-sm btn-danger float-right mb-1"
                        onClick={() => setAlertUpload("")}
                        >
                            X
                        </button>
                    </h5>
                    <hr style={{borderColor: "red"}} />
                    <p className="text-success"> {alertUpload} </p>
                </div>
                :null
            }
        </div>
    )
}
export default UploadImage;