import './login.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../../redux/action";
export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ username: "", password: "" });
    const userlogined = useSelector(state => state.userlogined);
    const setValueForUser = (key, value) => {
      const newVal = { ...user, [key]: value };
      setUser(newVal);
    };
    const login = () => {
      dispatch(fakeLogin(user));
    };
    useEffect(() => {
      if (userlogined.username) {
        navigate("/");
      }
    }, [userlogined, navigate]);

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        {/* <img src="images/team.jpg" alt="IMG"> </img> */}
                    </div>
                    {/* <!--=====TIÊU ĐỀ======--> */}
                    <div className="login100-form validate-form">
                        <span className="login100-form-title">
                            <b>ĐĂNG NHẬP HỆ THỐNG QUẢN LÝ</b>
                        </span>
                        {/* <!--=====FORM INPUT TÀI KHOẢN VÀ PASSWORD======--> */}
                        <form action="">
                            <div className="wrap-input100 validate-input">
                                {/* <input className="input100" type="text" placeholder="Tài khoản quản trị" name="username"
                                id="username"> </input> */}
                                <input className="input100" type="text" name="username"
                                    id="username" placeholder='Tài khoản quản trị' onChange={e => setValueForUser("username", e.target.value)}></input>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    {/* <i className='bx bx-user'></i> */}
                                    <i className="bi bi-person-fill"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input">
                            {/* <input autoComplete="off" className="input100" type="password" placeholder="Mật khẩu"
                                name="current-password" id="password-field"> </input> */}
                                <input autoComplete="off" className="input100" type="password" placeholder="Mật khẩu"
                                name="current-password" id="password"  onChange={e => setValueForUser("password", e.target.value)}></input>
                                 
                            {/* <span toggle="#password-field" className="bi bi-eye click-eye"></span> */}
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                            <i className="bi bi-key-fill"></i>
                            </span>
                        </div>

                            {/* <!--=====ĐĂNG NHẬP======--> */}
                            <div className="container-login100-form-btn">
                                {/* <input type="button" value="Đăng nhập" id="submit"  > </input>  */}
                               <input type="button" value="Đăng nhập" id="submit"  onClick={() => { login(); }}></input>
                            </div>
                            {/* <!--=====LINK TÌM MẬT KHẨU======--> */}
                            <div className="text-right p-t-12">
                                <a className="txt2" href="/forgot.html">
                                    Bạn quên mật khẩu?
                                </a>
                            </div>
                        </form>
                        {/* <!--=====FOOTER======--> */}
                        <div className="text-center p-t-70 txt2" style={{textAlign: "center"}}>
                            Product Management Application <i className="far fa-copyright" aria-hidden="true"></i>
                             <a className="txt2" href="https://www.facebook.com/lengocbao99/"> Code by Bảo </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}