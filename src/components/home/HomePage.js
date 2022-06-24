import '../../main.css'
import { CanvasJSChart } from 'canvasjs-react-charts'
import Title from './navbar/Title'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function HomePage() {

    const [totalProducts, setTotalProducts] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [statusOrder, setStatusOrder] = useState([]);
    const [count, setCount] = useState(0);
    const [staff, setStaff] = useState(0);

    useEffect(() => {
        //total products
        axios.get('http://localhost:3001/products')
            .then(res => {
                let data = res.data;
                let total = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].amount) {
                        total = total + Number(data[i].amount);
                    }
                }
                setTotalProducts(total)
            })
            .catch(err => {
                throw err;
            })
        // total Orders
        axios.get('http://localhost:3001/orders')
            .then(res => {
                setTotalOrders(res.data.length)
            })
            .catch(err => {
                throw err;
            })
        // mat hang sap het 
        axios.get('http://localhost:3001/products')
            .then(res => {
                let data = res.data;
                let count = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].amount && data[i].amount < 5) {
                        count++;
                    }
                }
                setCount(count)
            })
            .catch(err => {
                throw err;
            })
        //total staff
        axios.get('http://localhost:3001/staffs')
            .then(res => {
                setStaff(res.data.length)
            })
            .catch(err => {
                throw err;
            })
        //status order
        axios.get('http://localhost:3001/orders')
            .then(res => {
                setStatusOrder(res.data)
            })
            .catch(err => {
                throw err;
            })
    })

    const options = {
        animationEnabled: true,
        title: {
            text: "Number of New Customers"
        },
        axisY: {
            title: "Number of Customers"
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "spline",
            name: "2016",
            showInLegend: true,
            dataPoints: [
                { y: 155, label: "Jan" },
                { y: 150, label: "Feb" },
                { y: 152, label: "Mar" },
                { y: 148, label: "Apr" },
                { y: 142, label: "May" },
                { y: 150, label: "Jun" },
                { y: 146, label: "Jul" },
                { y: 149, label: "Aug" },
                { y: 153, label: "Sept" },
                { y: 158, label: "Oct" },
                { y: 154, label: "Nov" },
                { y: 150, label: "Dec" }
            ]
        },
        {
            type: "spline",
            name: "2017",
            showInLegend: true,
            dataPoints: [
                { y: 172, label: "Jan" },
                { y: 173, label: "Feb" },
                { y: 175, label: "Mar" },
                { y: 172, label: "Apr" },
                { y: 162, label: "May" },
                { y: 165, label: "Jun" },
                { y: 172, label: "Jul" },
                { y: 168, label: "Aug" },
                { y: 175, label: "Sept" },
                { y: 170, label: "Oct" },
                { y: 165, label: "Nov" },
                { y: 169, label: "Dec" }
            ]
        }]
    }
    const options2 = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title: {
            text: "Simple Column Chart with Index Labels"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 10, y: 71 },
                { x: 20, y: 55 },
                { x: 30, y: 50 },
                { x: 40, y: 65 },
                { x: 50, y: 71 },
                { x: 60, y: 68 },
                { x: 70, y: 38 },
                { x: 80, y: 92, indexLabel: "Highest" },
                { x: 90, y: 54 },
                { x: 100, y: 60 },
                { x: 110, y: 21 },
                { x: 120, y: 49 },
                { x: 130, y: 36 }
            ]
        }]
    }

    return (
        <div className='homepage'>
            <divs className="row">
                <Title title='Bảng điều khiển'></Title>
            </divs>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <Link to={'/staff'}>
                                <div className="widget-small primary coloured-icon"><i className='icon bx bxs-user-account fa-3x'></i>
                                    <div className="info">

                                        <h4>Tổng Nhân viên</h4>
                                        <p><b>{staff} Nhân Viên</b></p>
                                        <p className="info-tong">Tổng số nhân viên được quản lý.</p>

                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to={'/product'}>
                                <div className="widget-small info coloured-icon"><i className='icon bx bxs-data fa-3x'></i>
                                    <div className="info">
                                        <h4>Tổng sản phẩm</h4>
                                        <p><b>{totalProducts} sản phẩm</b></p>
                                        <p className="info-tong">Tổng số sản phẩm được quản lý.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to={'/order'}>
                                <div className="widget-small warning coloured-icon"><i className='icon bx bxs-shopping-bags fa-3x'></i>
                                    <div className="info">
                                        <h4>Tổng đơn hàng</h4>
                                        <p><b>{totalOrders} đơn hàng</b></p>
                                        <p className="info-tong">Tổng số hóa đơn bán hàng trong tháng.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to={'/product'}>
                                <div className="widget-small danger coloured-icon"><i className='icon bx bxs-error-alt fa-3x'></i>
                                    <div className="info">
                                        <h4>Sắp hết hàng</h4>
                                        <p><b>{count} sản phẩm</b></p>
                                        <p className="info-tong">Số sản phẩm cảnh báo hết cần nhập thêm.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">Tình trạng đơn hàng</h3>
                                <div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID đơn hàng</th>
                                                <th>Tên khách hàng</th>
                                                <th>Tổng tiền</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {statusOrder.map(order => (
                                                <tr key={order.id}>
                                                    <td>{order.id}</td>
                                                    <td>{order.customer}</td>
                                                    <td>{order.total}</td>
                                                    <td>{order.status}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">Dữ liệu 6 tháng đầu vào</h3>
                                <CanvasJSChart options={options} 	/* onRef={ref => this.chart = ref} */ />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">Thống kê 6 tháng doanh thu</h3>
                                <CanvasJSChart options={options2} 	/* onRef={ref => this.chart = ref} */ />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        //* end content 

    )
}