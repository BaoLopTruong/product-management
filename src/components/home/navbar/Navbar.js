import '../../../main.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Navbar() {
      const [username, setUser] = useState([]);

      useEffect(() => {
       axios.get("https://json-server-api-product.herokuapp.com/users/1/profiles")
       .then(res =>{
            setUser(res.data)
       })
       .catch(err =>{
            throw err;
       })
       .finally(() =>{
 
       })     
      });

      return (
            <div >
                  <header className="app-header">
                        {/* <!-- Sidebar toggle button--> */}
                        <span className="app-sidebar__toggle"  data-toggle="sidebar" aria-label="Hide Sidebar"></span>
                  </header>
                  {/* <!-- Sidebar menu--> */}
                  <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
                  <aside className="app-sidebar">
                        <div className="app-sidebar__user">
                              {/* <img className="app-sidebar__user-avatar" src={'../../../img-staff/lnb.jpg'} width="50px" alt="User Imagee"> </img> */}
                              <div>
                                    <p className="app-sidebar__user-name"><b></b></p>
                                    {username.map((user) =>(
                                    <p key={user.id} className="app-sidebar__user-name"><b>{user.name}</b></p>

                                    ))}
                                    <p className="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
                              </div>
                        </div>
                        <hr></hr>
                        <ul className="app-menu">
                              <li>
                                    <Link to={'/sell'} className="app-menu__item haha" >
                                          <i className='app-menu__icon bx bx-cart-alt'></i>
                                          <span className="app-menu__label">POS Bán Hàng</span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to={'/'} className="app-menu__item ">
                                          <i className='app-menu__icon bx bx-tachometer'></i>
                                          <span className="app-menu__label">Bảng điều khiển</span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to={'/staff'} className="app-menu__item " >
                                          <i className='app-menu__icon bx bx-id-card'></i>
                                          <span className="app-menu__label">Quản lý nhân viên</span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to={'/product'} className="app-menu__item" >
                                          <i className='app-menu__icon bx bx-purchase-tag-alt'></i>
                                          <span className="app-menu__label">Quản lý sản phẩm</span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to={'/order'} className="app-menu__item" href="table-data-oder.html">
                                          <i className='app-menu__icon bx bx-task'></i>
                                          <span className="app-menu__label">Quản lý đơn hàng</span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to={'/report'} className="app-menu__item" >
                                          <i className='app-menu__icon bx bx-pie-chart-alt-2'></i>
                                          <span className="app-menu__label">Báo cáo </span>
                                    </Link>
                              </li>
                        </ul>
                  </aside>
    
            </div>
      )
}