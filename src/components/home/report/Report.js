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
        axios.get('https://json-server-api-product.herokuapp.com/products')
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
        axios.get('https://json-server-api-product.herokuapp.com/products')
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
        axios.get('https://json-server-api-product.herokuapp.com/staffs')
            .then(res => {
                setStaff(res.data.length)
                let data = res.data;
                let array = [];
                for (let i = data.length - 1; i >= data.length - 4; i--) {
                    array[i] = data[i]
                }
                setNewstaff(array)
            })
            .catch(err => {
                throw err;
            })
        //data orders 
        axios.get('https://json-server-api-product.herokuapp.com/orders')
            .then(res => {
                setOrder(res.data)
                let data = res.data
                let total = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].total) {
                        total = total + parseFloat(data[i].total)
                    }
                }
                setTotalPriceOrder(total)
            })
            .catch(err => {
                throw err;
            })
        // total orders
        axios.get('https://json-server-api-product.herokuapp.com/orders')
            .then(res => {
                setTotalOrder(res.data.length)
            })
            .catch(err => {
                throw err;
            })
        // count product het hang
        axios.get('https://json-server-api-product.herokuapp.com/products')
            .then(res => {
                let data = res.data;
                let total = 0;
                let array = [];
                for (let i = 0; i < data.length; i++) {
                    if (data[i].status === "H???t h??ng") {
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
        axios.get('https://json-server-api-product.herokuapp.com/orders')
            .then(res => {
                let data = res.data;
                let total = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].status === "???? h???y") {
                        total++;
                    }
                }
                setCancelOrder(total);
            })
    });


    return (
        <div className="report">
            <div className="row">
                <Title title='B??o c??o'></Title>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small primary coloured-icon"><i className='icon  bx bxs-user fa-3x'></i>
                        <div className="info">
                            <h4>T???ng Nh??n vi??n</h4>
                            <p><b>{staff} nh??n vi??n</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small info coloured-icon"><i className='icon bx bxs-purchase-tag-alt fa-3x' ></i>
                        <div className="info">
                            <h4>T???ng s???n ph???m</h4>
                            <p><b>{products} s???n ph???m</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small warning coloured-icon"><i className='icon fa-3x bx bxs-shopping-bag-alt'></i>
                        <div className="info">
                            <h4>T???ng ????n h??ng</h4>
                            <p><b>{totalOrder} ????n h??ng</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small danger coloured-icon"><i className='icon fa-3x bx bxs-receipt' ></i>
                        <div className="info">
                            <h4>????n h??ng h???y</h4>
                            <p><b>{cancelOrder} ????n h??ng</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small primary coloured-icon"><i className='icon fa-3x bx bxs-chart' ></i>
                        <div className="info">
                            <h4>T???ng thu nh???p</h4>
                            <p><b>{totalPriceOrder}0.000  ??</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small info coloured-icon"><i className='icon fa-3x bx bxs-user-badge' ></i>
                        <div className="info">
                            <h4>Nh??n vi??n m???i</h4>
                            <p><b>3 nh??n vi??n</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small warning coloured-icon"><i className='icon fa-3x bx bxs-tag-x' ></i>
                        <div className="info">
                            <h4>H???t h??ng</h4>
                            <p><b>{countProduct} s???n ph???m</b></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">S???N PH???M B??N CH???Y</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>M?? s???n ph???m</th>
                                        <th>T??n s???n ph???m</th>
                                        <th>Gi?? ti???n</th>
                                        <th>Danh m???c</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topProduct.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price} ??</td>
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
                            <h3 className="tile-title">T???NG ????N H??NG</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>ID ????n h??ng</th>
                                        <th>Kh??ch h??ng</th>
                                        <th>????n h??ng</th>
                                        <th>S??? l?????ng</th>
                                        <th>T???ng ti???n</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.map(order => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.customer}</td>
                                            <td>{order.orderName}</td>
                                            <td>{order.amount} s???n ph???m</td>
                                            <td>{order.total} ??</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <th colSpan="4">T???ng c???ng:</th>
                                        <td>{totalPriceOrder}0.000 ??</td>
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
                            <h3 className="tile-title">S???N PH???M ???? H???T</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>M?? s???n ph???m</th>
                                        <th>T??n s???n ph???m</th>
                                        <th>???nh</th>
                                        <th>S??? l?????ng</th>
                                        <th>T??nh tr???ng</th>
                                        <th>Gi?? ti???n</th>
                                        <th>Danh m???c</th>
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
                                            <td>{product.price} ??</td>
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
                            <h3 className="tile-title">NH??N VI??N M???I</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>H??? v?? t??n</th>
                                        <th>?????a ch???</th>
                                        <th>Ng??y sinh</th>
                                        <th>Gi???i t??nh</th>
                                        <th>S??T</th>
                                        <th>Ch???c v???</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newStaff.map(staff => (
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