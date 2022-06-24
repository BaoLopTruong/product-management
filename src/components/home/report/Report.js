import Title from "../navbar/Title";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Report() {

    const [products, setProducts] = useState(0);
    const [countProduct, setCountProduct] = useState(0);
    const [topProduct, setTopProduct] = useState([]);
    const [overProduct, setOverProduct] = useState([]);
   

    const [staff, setStaff] = useState(0);
    const [newStaff, setNewstaff] = useState([]);

    const [order, setOrder] = useState([]);
    const [totalOrder, setTotalOrder] = useState(0);
    const [cancelOrder, setCancelOrder] = useState(0);
    const [totalPriceOrder, setTotalPriceOrder] = useState(0);


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
                setProducts(total)
            })
            .catch(err => {
                throw err;
            })
        //top product
        axios.get('http://localhost:3001/products')
            .then(res => {
                let data = res.data;
                let array = []
                for (let i = 0; i < 5; i++) {
                    array[i] = data[i]
                }
                setTopProduct(array)
            })
            .catch(err => {
                throw err;
            })
        //total staff
        axios.get('http://localhost:3001/staffs')
            .then(res => {
                setStaff(res.data.length)
                let data = res.data;
                let array = [];
                for(let i = data.length-1; i >=data.length-4; i--){
                    array[i] = data[i]
                }
                setNewstaff(array)
            })
            .catch(err => {
                throw err;
            })
        //data orders 
        axios.get('http://localhost:3001/orders')
            .then(res => {
                setOrder(res.data)
                let data = res.data
                let total =0;
                for(let i =0; i<data.length; i++){
                    if(data[i].total){
                        total = total + parseFloat(data[i].total)
                    }
                }
                setTotalPriceOrder(total)
            })
            .catch(err => {
                throw err;
            })
        // total orders
        axios.get('http://localhost:3001/orders')
            .then(res => {
                setTotalOrder(res.data.length)
            })
            .catch(err => {
                throw err;
            })
        // count product het hang
        axios.get('http://localhost:3001/products')
            .then(res => {
                let data = res.data;
                let total = 0;
                let array = [];
                for (let i = 0; i < data.length; i++) {
                    if (data[i].status === "Hết hàng") {
                        total++;
                        array[i] = data[i];
                    }
                }
                setCountProduct(total);
                setOverProduct(array);
            })
            .catch(err => {
                throw err;
            })
        // don hang da huy    
        axios.get('http://localhost:3001/orders')
            .then(res => {
                let data = res.data;
                let total = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].status === "Đã hủy") {
                        total++;
                    }
                }
                setCancelOrder(total);
            })
    });


    return (
        <div className="report">
            <div className="row">
                <Title title='Báo cáo'></Title>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small primary coloured-icon"><i className='icon  bx bxs-user fa-3x'></i>
                        <div className="info">
                            <h4>Tổng Nhân viên</h4>
                            <p><b>{staff} nhân viên</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small info coloured-icon"><i className='icon bx bxs-purchase-tag-alt fa-3x' ></i>
                        <div className="info">
                            <h4>Tổng sản phẩm</h4>
                            <p><b>{products} sản phẩm</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small warning coloured-icon"><i className='icon fa-3x bx bxs-shopping-bag-alt'></i>
                        <div className="info">
                            <h4>Tổng đơn hàng</h4>
                            <p><b>{totalOrder} đơn hàng</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small danger coloured-icon"><i className='icon fa-3x bx bxs-receipt' ></i>
                        <div className="info">
                            <h4>Đơn hàng hủy</h4>
                            <p><b>{cancelOrder} đơn hàng</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small primary coloured-icon"><i className='icon fa-3x bx bxs-chart' ></i>
                        <div className="info">
                            <h4>Tổng thu nhập</h4>
                            <p><b>104.890.000 đ</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small info coloured-icon"><i className='icon fa-3x bx bxs-user-badge' ></i>
                        <div className="info">
                            <h4>Nhân viên mới</h4>
                            <p><b>3 nhân viên</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small warning coloured-icon"><i className='icon fa-3x bx bxs-tag-x' ></i>
                        <div className="info">
                            <h4>Hết hàng</h4>
                            <p><b>{countProduct} sản phẩm</b></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">SẢN PHẨM BÁN CHẠY</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá tiền</th>
                                        <th>Danh mục</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topProduct.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.category}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">TỔNG ĐƠN HÀNG</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>ID đơn hàng</th>
                                        <th>Khách hàng</th>
                                        <th>Đơn hàng</th>
                                        <th>Số lượng</th>
                                        <th>Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.map(order => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.customer}</td>
                                            <td>{order.orderName}</td>
                                            <td>{order.amount} sản phẩm</td>
                                            <td>{order.total} đ</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <th colSpan="4">Tổng cộng:</th>
                                        <td>{totalPriceOrder}0.000 đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">SẢN PHẨM ĐÃ HẾT</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Tình trạng</th>
                                        <th>Giá tiền</th>
                                        <th>Danh mục</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {overProduct.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td><img style={{ width: '50px', height: '50px' }} src={product.image} alt="no imgae"></img></td>
                                            <td>{product.amount}</td>
                                            <td>{product.status}</td>
                                            <td>{product.price} đ</td>
                                            <td>{product.category}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">NHÂN VIÊN MỚI</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>Họ và tên</th>
                                        <th>Địa chỉ</th>
                                        <th>Ngày sinh</th>
                                        <th>Giới tính</th>
                                        <th>SĐT</th>
                                        <th>Chức vụ</th>
                                    </tr>
                                </thead>
                                <tbody>
                             {newStaff.map(staff =>(
                                <tr key={staff.id}>
                                    <td>{staff.name}</td>
                                    <td>{staff.address}</td>
                                    <td>{staff.dateofbirth}</td>
                                    <td>{staff.gender}</td>
                                    <td>{staff.numberphone}</td>
                                    <td>{staff.position}</td>
                                </tr>
                             ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}