import '../../../main.css'
import { Link } from 'react-router-dom'
// import Clock from './Clock'


export default function Navbar(props) {

      return (
            <div >
                  <header className="app-header">
                        {/* <!-- Sidebar toggle button--> */}
                        <span className="app-sidebar__toggle"  data-toggle="sidebar" aria-label="Hide Sidebar"></span>
                        {/* <!-- Navbar Right Menu--> */}
                        <ul className="app-nav">
                              {/* <!-- User Menu--> */}
                              {/* <li><a className="app-nav__item" href="/index.html"><i className='bx bx-log-out bx-rotate-180'></i> </a>
                              </li> */}
                        </ul>
                  </header>
                  {/* <!-- Sidebar menu--> */}
                  <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
                  <aside className="app-sidebar">
                        <div className="app-sidebar__user">
                              {/* <img className="app-sidebar__user-avatar" src="/images/hay.jpg" width="50px" alt="User Image"> </img> */}
                              <div>
                                    <p className="app-sidebar__user-name"><b>Lê Ngọc Bảo</b></p>
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
                              {/* <li><a className="app-menu__item" href="#">
                                    <i className='app-menu__icon bx bx-user-voice'></i>
                                    <span className="app-menu__label">Quản lý khách hàng</span></a>
                              </li> */}
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
                              {/* <li>
                                    <Link to={'/internal'} className="app-menu__item" >
                                          <i className='app-menu__icon bx bx-run'></i>
                                          <span
                                                className="app-menu__label">Quản lý nội bộ
                                          </span>
                                    </Link>
                              </li> */}
                              {/* <li>
                                    <Link to={'/tablemoney'} className="app-menu__item" >
                                          <i className='app-menu__icon bx bx-dollar'></i>
                                          <span
                                                className="app-menu__label">Bảng kê lương</span>
                                    </Link>
                              </li> */}
                              <li>
                                    <Link to={'/report'} className="app-menu__item" >
                                          <i className='app-menu__icon bx bx-pie-chart-alt-2'></i>
                                          <span className="app-menu__label">Báo cáo </span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to={'/cenderlar'} className="app-menu__item" >
                                          <i className='app-menu__icon bx bx-calendar-check'></i>
                                          <span className="app-menu__label">Lịch công tác </span>
                                    </Link>
                              </li>
                              <li>
                                    <Link to={'/setting'} className="app-menu__item" >
                                          <i className='app-menu__icon bx bx-cog'></i>
                                          <span className="app-menu__label">Cài đặt hệ thống</span>
                                    </Link>
                              </li>
                        </ul>
                  </aside>
                  <div className="row">
                <div className="col-md-12">
                    <div className="app-title">
                        <ul className="app-breadcrumb breadcrumb">
                            <li className="breadcrumb-item"><b> {props.location}</b></li>
                        </ul>
                        {/* <div id="clock" ><span className='date'> <p style={{float: 'right'}}>{hours}:{mintues}:{seconds} </p> <br></br>   
                        <p style={{ float: 'right'}}> {day}, ngày {date}, tháng {month}, năm {year}</p></span>  </div> */}
                    </div>
                </div>
            </div>
            </div>
      )
}