
export default function LoginForm(props) {
    
    return(
        <div className="container col-10 col-md-6">
            <h3 className="text-success mt-5">กรุณาเข้าสู่ระบบ</h3>
            <hr />
            <div className="form-group">
                <label htmlFor="email">
                    Email address :
                </label>
                <input type="email" id="email" value={props.email} maxLength="50" className="form-control" onChange={props.onHandleChangeFormLogin} />
            </div>
            <div className="form-group">
                <label htmlFor="password">
                    Password :
                </label>
                <input type="password" id="password" value={props.password} minLength="6" maxLength="20" className="form-control" onChange={props.onHandleChangeFormLogin} />
            </div>
            <p className="text-danger"> {props.msg} </p>
            <p>
                <button className="btn btn-success mt-2" onClick={props.onHandleCreate} disabled>
                    Create account
                </button>
                <button className="btn btn-primary mt-2 ml-3" onClick={props.onHandleLogin}>
                    Login
                </button>
            </p>
            
        </div>
    )
}