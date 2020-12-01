import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ModalPreview = (props) => {
  const {checkpart} = props;

  function renderImages() {
    return(
      <div className="row">
          {/* รูปที่ 0 */}
          {props.imageurl_title && 
          <div className="col-sm-4">
              <button className="btn btn-sm text-danger float-right" 
                style={{fontWeight: "bolder", fontSize: "30px"}}
                title="ลบรูปภาพ"
                onClick={() => props.onDeleteImage(props.imagename_title, "_title")}>
                x
              </button>
              <img src={props.imageurl_title} style={{width: "100%", height: "200px"}} />
          </div>
          }
          {/* รูปที่ 1 */}
          {props.imageurl_1 && 
          <div className="col-sm-4">
              <button className="btn btn-sm text-danger float-right" 
                style={{fontWeight: "bolder", fontSize: "30px"}}
                title="ลบรูปภาพ"
                onClick={() => props.onDeleteImage(props.imagename_1, "_1")}>
                x
              </button>
              <img src={props.imageurl_1} style={{width: "100%", height: "200px"}} />
          </div>
          }
          {/* รูปที่ 2 */}
          {props.imageurl_2 && 
          <div className="col-sm-4">
              <button className="btn btn-sm text-danger float-right" 
                style={{fontWeight: "bolder", fontSize: "30px"}}
                title="ลบรูปภาพ"
                onClick={() => props.onDeleteImage(props.imagename_2, "_2")}>
                x
              </button>
              <img src={props.imageurl_2} style={{width: "100%", height: "200px"}} />
          </div>
          }
          {/* รูปที่ 3 */}
          {props.imageurl_3 && 
          <div className="col-sm-4">
              <button className="btn btn-sm text-danger float-right" 
                style={{fontWeight: "bolder", fontSize: "30px"}}
                title="ลบรูปภาพ"
                onClick={() => props.onDeleteImage(props.imagename_3, "_3")}>
                x
              </button>
              <img src={props.imageurl_3} style={{width: "100%", height: "200px"}} />
          </div>
          }
          {/* รูปที่ 4 */}
          {props.imageurl_4 && 
          <div className="col-sm-4">
              <button className="btn btn-sm text-danger float-right" 
                style={{fontWeight: "bolder", fontSize: "30px"}}
                title="ลบรูปภาพ"
                onClick={() => props.onDeleteImage(props.imagename_4, "_4")}>
                x
              </button>
              <img src={props.imageurl_4} style={{width: "100%", height: "200px"}} />
          </div>
          }
          {/* รูปที่ 5 */}
          {props.imageurl_5 && 
          <div className="col-sm-4">
              <button className="btn btn-sm text-danger float-right" 
                style={{fontWeight: "bolder", fontSize: "30px"}}
                title="ลบรูปภาพ"
                onClick={() => props.onDeleteImage(props.imagename_5, "_5")}>
                x
              </button>
              <img src={props.imageurl_5} style={{width: "100%", height: "200px"}} />
          </div>
          }

      </div>
      
    )
  }

    return (
        <Modal
          show = {props.show}
          onHide = {props.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              เลือกรูปภาพที่ต้องการลบ
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <div className="container">
             {checkpart.length === 0 && <h6 className="text-center text-danger">ไม่มีรูแภาพ</h6>} 
              {renderImages()}
           </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}
export default ModalPreview;