import '../../../main.css'

import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../navbar/Title';

export default function OrderAdd() {

    const [order, setOrder] = useState({});
    const [ newId, setNewId] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/orders/")
        .then(res =>{
            sortOrder(res.data)
            console.log(res.data[res.data.length-1].id)
            setNewId(parseInt( res.data[res.data.length-1].id)+1)
        })
        .catch(err =>{
            console.log(err)
        })
        .finally(()=>{
            setOrder({
                ...order,
                id: newId
            })
        })
    });

    const handleChange = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        })
        console.log(order)
    }
    const handleAdd = () => {
        axios.post("http://localhost:3001/orders/", order)
        .then(res =>{
            alert("Add new Product Succesfully");
            navigate('/order')
        })
        .catch(er =>{
            alert("something wrong")
        })
    }

    const sortOrder = (orders) => {
        for (let i = 0; i < orders.length; i++) {
            if (orders[i + 1]) {
                if (parseInt(orders[i].id) > parseInt(orders[i + 1].id)) {
                    let swap = orders[i];
                    orders[i] = orders[i + 1];
                    orders[i + 1] = swap;
                }
            }
            else {
                console.log("not ok")
            }
        }    
    }

    return (
        <div className="order-add">
         <div className="row">
                <Title title='Quản lý đơn hàng/ Thêm thông tin đơn hàng'></Title>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <form className="row">
                                <div className="form-group col-md-4">
                                    <label className="control-label">ID đơn hàng</label>
                                    <input className="form-control" type="text" name='id' readOnly value={newId}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Khách hàng</label>
                                    <input className="form-control" type="text" name="customer" onChange={handleChange}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Đơn hàng</label>
                                    <input className="form-control" type="text" name="orderName" onChange={handleChange}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Số Lượng</label>
                                    <input className="form-control" type="number" name="amount" onChange={handleChange}></input>
                                </div>
                                <div className="form-group  col-md-4">
                                    <label className="control-label">Tổng Tiền</label>
                                    <input className="form-control" type="text" name="total" onChange={handleChange} ></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Tình Trạng</label>
                                    <select className="form-control" id="exampleSelect2" name="status" onChange={handleChange}>
                                        <option value='none'>-- Chọn trạng thái --</option>
                                        <option value='Đã hoàn thành'>Đã hoàn thành</option>
                                        <option value='Đang chờ thanh toán'>Đang chờ thanh toán</option>
                                        <option value='Đã Hủy'>Đã Hủy</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <button className="btn btn-save" type="button" onClick={handleAdd} >Lưu lại</button>
                        <Link to={'/order'} className="btn btn-cancel" >Hủy bỏ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}