import '../../../main.css'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../navbar/Title';

export default function OrderDetail() {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (orderId) {
            axios.get(`https://json-server-api-product.herokuapp.com/orders/${orderId}`)
                .then(res => {
                    setOrder(res.data);
                })
                .catch(err => {
                    throw err;
                })
                .finally(() => {
                })
        }
    }, [orderId]);

    const handleSave = () => {
        axios.put(`https://json-server-api-product.herokuapp.com/orders/${orderId}`, order)
            .then(res => {
                alert("Update successfully");
                navigate('/order');
            })
            .catch(err => {
                alert("something wrong")
            })
    }

    const handleChange = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="order-detail">
            <div className="row">
                <Title title='Quản lý đơn hàng/ Chỉnh sửa thông tin đơn hàng'></Title>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <form className="row">
                                <div className="form-group col-md-4">
                                    <label className="control-label">ID đơn hàng</label>                              
                                    <input className="form-control" type="text" name='id' readOnly value={orderId}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Khách hàng</label>
                                    <input className="form-control" type="text" name="customer" value={order.customer || ""} onChange={handleChange}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Đơn hàng</label>                                 
                                    <input className="form-control" type="text" name="orderName" value={order.orderName || ""} onChange={handleChange}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Số Lượng</label>   
                                    <input className="form-control" type="number" name="amount" value={order.amount || ""} onChange={handleChange}></input>
                                </div>
                                <div className="form-group  col-md-4">
                                    <label className="control-label">Tổng Tiền</label>
                                    <input className="form-control" type="text" name="total" value={order.total || ""} onChange={handleChange} ></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Tình Trạng</label>
                                    <select className="form-control" id="exampleSelect2" name="status" value={order.status || ""} onChange={handleChange}>
                                        <option value='none'>-- Chọn trạng thái --</option>
                                        <option value='Đã hoàn thành'>Đã hoàn thành</option>
                                        <option value='Đang chờ thanh toán'>Đang chờ thanh toán</option>
                                        <option value='Đã Hủy'>Đã Hủy</option>
                                    </select>
                                </div>

                            </form>

                        </div>
                        <button className="btn btn-save" type="button" onClick={handleSave} >Lưu lại</button>
                        <Link to={'/order'} className="btn btn-cancel" >Hủy bỏ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}