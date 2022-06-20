import '../../../main.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {

      return (
            <div >
                  <header className="app-header">
                        {/* <!-- Sidebar toggle button--> */}
                        <a className="app-sidebar__toggle"  data-toggle="sidebar" aria-label="Hide Sidebar"></a>
                        {/* <!-- Navbar Right Menu--> */}
                        <ul className="app-nav">
                              {/* <!-- User Menu--> */}
                              <li><a className="app-nav__item" href="/index.html"><i className='bx bx-log-out bx-rotate-180'></i> </a>
                              </li>
                        </ul>
                  </header>
                  {/* <!-- Sidebar menu--> */}
                  <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
                  <aside className="app-sidebar">
                        <div className="app-sidebar__user">
                              {/* <img className="app-sidebar__user-avatar" src="/images/hay.jpg" width="50px" alt="User Image"> </img> */}
                              <div>
                                    <p className="app-sidebar__user-name"><b>Le Ngoc Bao</b></p>
                                    <p className="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
                              </div>
                        </div>
                        <hr></hr>
                        <ul className="app-menu">
                              <li>
                                    <a className="app-menu__item haha" href="phan-mem-ban-hang.html">
                                          <i className='app-menu__icon bx bx-cart-alt'></i>
                                          <span className="app-menu__label">POS Bán Hàng</span>
                                    </a>
                              </li>
                              <li>
                                    <Link to={'/'} className="app-menu__item active">
                                          <i className='app-menu__icon bx bx-tachometer'></i>
                                          <span className="app-menu__label">Bảng điều khiển</span>
                                    </Link>
                              </li>
                              <li>
                                    <a className="app-menu__item " href="table-data-table.html">
                                          <i className='app-menu__icon bx bx-id-card'></i>
                                          <span className="app-menu__label">Quản lý nhân viên</span>
                                    </a>
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
                                    <a className="app-menu__item" href="table-data-oder.html">
                                          <i className='app-menu__icon bx bx-task'></i>
                                          <span className="app-menu__label">Quản lý đơn hàng</span>
                                    </a>
                              </li>
                              <li>
                                    <a className="app-menu__item" href="table-data-banned.html">
                                          <i className='app-menu__icon bx bx-run'></i>
                                          <span
                                                className="app-menu__label">Quản lý nội bộ
                                          </span>
                                    </a>
                              </li>
                              <li>
                                    <a className="app-menu__item" href="table-data-money.html">
                                          <i className='app-menu__icon bx bx-dollar'></i>
                                          <span
                                                className="app-menu__label">Bảng kê lương</span>
                                    </a>
                              </li>
                              <li>
                                    <a className="app-menu__item" href="quan-ly-bao-cao.html">
                                          <i className='app-menu__icon bx bx-pie-chart-alt-2'></i>
                                          <span className="app-menu__label">Báo cáo doanh thu</span>
                                    </a>
                              </li>
                              <li>
                                    <a className="app-menu__item" href="page-calendar.html">
                                          <i className='app-menu__icon bx bx-calendar-check'></i>
                                          <span className="app-menu__label">Lịch công tác </span>
                                    </a>
                              </li>
                              <li>
                                    <a className="app-menu__item" href="#">
                                          <i className='app-menu__icon bx bx-cog'></i>
                                          <span className="app-menu__label">Cài đặt hệ thống</span>
                                    </a>
                              </li>
                        </ul>
                  </aside>
            </div>
      )
}