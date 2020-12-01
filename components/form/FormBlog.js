
function FormBlog(props) {

  return(
      <div className="row">
        <div className="col pb-3">
            <h5 className="text-primary">Create blog</h5>
            {props.msgSave === "บันทึกเรียบร้อย !" &&
                <div className="container col-sm-4 col-8 fixed-bottom mb-5 bg-secondary">
                    <h5 className=" text-center pt-3 pl-4 text-warning pb-2">
                        แจ้งเตือน {props.onCloseButton}
                    </h5>
                    <hr style={{borderColor: "green"}} />
                    <p className="text-center text-success mt-3 mb-5 text-light text-bolder">
                        {props.msgSave}
                    </p>
                </div>
            }
            <hr style={{borderColor: "green"}} />
            <form onSubmit={props.onHandleSubmitForm}>
                {/* Title */}
                <div className="form-row mb-3">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-info">
                                หัวเรื่อง <span className="text-danger ml-2"> {props.msg} </span>
                            </label>
                            <textarea name="subject" value={props.subject} maxLength="300" className="form-control" rows="5" onChange={props.onHandleChangeForm} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="text-info">
                                ผู้เขียน <span className="text-danger ml-2"> {props.msg} </span>
                            </label>
                            <input name="author" type="text" value={props.author} maxLength="30" className="form-control" rows="3" onChange={props.onHandleChangeForm} />
                        </div>
                        <div className="form-group">
                            <label className="text-info">
                                Category <span className="text-danger ml-2"> {props.msg} </span>
                            </label>
                            <select name="category" className="form-control" onChange={props.onHandleChangeForm}>
                                <option>เลือกประเภท</option>
                                <option value="วิทยาศาสตร์และเทคโนโลยี">วิทยาศาสตร์และเทคโนโลยี</option>
                                <option value="โปรโมชั่น">โปรโมชั่น</option>
                                <option value="เกษตร">เกษตร</option>
                                <option value="ข่าวสาร">ข่าวสาร</option>
                                <option value="อาหารและเครื่องดื่ม">อาหารและเครื่องดื่ม</option>
                                <option value="มหาวิทยาลัยสุโขทัยธรรมาธิราช">มหาวิทยาลัยสุโขทัยธรรมาธิราช</option>
                                <option value="หนังสือ">หนังสือ</option>
                                <option value="สรุปชุดวิชา">สรุปชุดวิชา</option>
                                <option value="อื่นๆ">อื่นๆ</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr style={{borderColor: "red"}} />
                <div className="form-group">
                <p className="text-danger" style={{fontWeight: "bolder"}}>Title</p>
                    <img
                    src={props.imageurl_title || "https://via.placeholder.com/300x150.png?text=upload image" } 
                    style={{width: "100%", height: "200px"}}
                    className="mb-3"
                    /> 
                    <label className="text-info mt-3">
                        Image URL title <span className="text-danger ml-2"> {props.msg} </span>
                    </label>
                    <input type="text" className="mt-3 form-control" value={props.imageurl_title} readOnly />
                </div>
                <div className="form-group">
                    <label className="text-info">
                        Title <span className="text-danger ml-2"> {props.msg} </span>
                    </label>
                    <textarea name="title" value={props.title} maxLength="1000" className="form-control" rows="5" onChange={props.onHandleChangeForm} />
                </div>
                <hr style={{borderColor: "red"}} />

                {/* ส่วนที่ 1 */}
                <div className="form-group">
                    <p className="text-danger" style={{fontWeight: "bolder"}}>ส่วนที่ 1</p>
                    <img
                     src={props.imageurl_1 || "https://via.placeholder.com/300x150.png?text=upload image" } 
                     style={{width: "100%", height: "200px"}}
                     className="mb-3"
                    />
                    <label className="text-info">
                        Image URL 1
                    </label>
                    <input type="text" className="mt-3 form-control" value={props.imageurl_1} readOnly />
                </div>
                <div className="form-group">
                    <label className="text-info">
                        Details 1
                    </label>
                    <textarea name="details_1" value={props.details_1} maxLength="1000" className="form-control" rows="5" onChange={props.onHandleChangeForm} />
                </div>
                <hr style={{borderColor: "red"}} />

                {/* ส่วนที่ 2 */}
                <div className="form-group">
                    <p className="text-danger" style={{fontWeight: "bolder"}}>ส่วนที่ 2</p>
                    <img
                     src={props.imageurl_2 || "https://via.placeholder.com/300x150.png?text=upload image" } 
                     style={{width: "100%", height: "200px"}}
                     className="mb-3"
                    />
                    <label className="text-info">
                        Image URL 2
                    </label>
                    <input type="text" className="mt-3 form-control" value={props.imageurl_2} readOnly />
                </div>
                <div className="form-group">
                    <label className="text-info">
                        Details 2
                    </label>
                    <textarea name="details_2" value={props.details_2} maxLength="1000" className="form-control" rows="5" onChange={props.onHandleChangeForm} />
                </div>
                <hr style={{borderColor: "red"}} />

                {/* ส่วนที่  3 */}
                <div className="form-group">
                    <p className="text-danger" style={{fontWeight: "bolder"}}>ส่วนที่ 3</p>
                    <img
                     src={props.imageurl_3 || "https://via.placeholder.com/300x150.png?text=upload image" } 
                     style={{width: "100%", height: "200px"}}
                     className="mb-3"
                    />
                    <label className="text-info">
                        Image URL 3
                    </label>
                    <input type="text" className="mt-3 form-control" value={props.imageurl_3} readOnly />
                </div>
                <div className="form-group">
                    <label className="text-info">
                        Details 3
                    </label>
                    <textarea name="details_3" value={props.details_3} maxLength="1000" className="form-control" rows="5" onChange={props.onHandleChangeForm} />
                </div>
                <hr style={{borderColor: "red"}} />

                {/* ส่วนที่ 4 */}
                <div className="form-group">
                    <p className="text-danger" style={{fontWeight: "bolder"}}>ส่วนที่ 4</p>
                    <img
                     src={props.imageurl_4 || "https://via.placeholder.com/300x150.png?text=upload image" } 
                     style={{width: "100%", height: "200px"}}
                     className="mb-3"
                    />
                    <label className="text-info">
                        Image URL 4
                    </label>
                    <input type="text" className="mt-3 form-control" value={props.imageurl_4} readOnly />
                </div>
                <div className="form-group">
                    <label className="text-info">
                        Details 4
                    </label>
                    <textarea name="details_4" value={props.details_4} maxLength="1000" className="form-control" maxLength="1000" rows="5" onChange={props.onHandleChangeForm} />
                </div>
                <hr style={{borderColor: "red"}} />

                {/* ส่วนที่ 5 */}
                <div className="form-group">
                    <p className="text-danger" style={{fontWeight: "bolder"}}>ส่วนที่ 5</p>
                    <img
                     src={props.imageurl_5 || "https://via.placeholder.com/300x150.png?text=upload image" } 
                     style={{width: "100%", height: "200px"}}
                     className="mb-3"
                    />
                    <label className="text-info">
                        Image URL 5
                    </label>
                    <input type="text" className="mt-3 form-control" value={props.imageurl_5} readOnly />
                </div>
                <div className="form-group">
                    <label className="text-info">
                        Details 5
                    </label>
                    <textarea name="details_5" value={props.details_5} maxLength="1000" className="form-control" rows="5" onChange={props.onHandleChangeForm} />
                </div>
                <hr style={{borderColor: "red"}} />
                <button type="submit" className="btn btn-primary ml-1 mt-1">บันทึกรายการ</button>
            </form>
            
        </div>
      </div>
  )
}

export default FormBlog;