import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const FormUploadFile = (props) => {
    const [show, setShow] = useState(false);

    return(
        <>
            <div className="container col col-md-10 fixed-top mt-3" style={{fontSize: "10px"}}>
                <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading className="pb-2">Upload รูปภาพ</Alert.Heading>
                    <ProgressBar now={props.refProgress} label={`${props.refProgress}%`} variant="success" style={{width: "100%"}} className="mb-2" />
                    <br />
                    <input type="file" className="pl-1 mt-1"  onChange={props.onHandleChangeUploadFile} />
                    {props.onSelectPart}
                    <button className="btn btn-sm btn-success ml-2 mt-1" type="submit" onClick={props.onHandleSubmitUploadFile}>อัพโหลด</button>
                    <div className="ml-2 mt-2">
                        {props.onButtonPreview}
                        {props.onButtonDeleteImage}
                    </div>
                </Alert>
            </div>
            {!show && <Button className="fixed-bottom btn-block btn-success" onClick={() => setShow(true)}>Click for upload images</Button>} 
        </>
    )
}
export default FormUploadFile;