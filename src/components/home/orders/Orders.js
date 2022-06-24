
import '../../../main.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Title from '../navbar/Title';

export default function OrdersPage() {

    const navigate = useNavigate();
    const [orders, setOrrders] = useState([])

    useEffect(() => {
        axios.get(`https://json-server-api-product.herokuapp.com/orders/`)
            .then(res => {
                sortOrder(res.data)
                setOrrders(res.data)
            })
            .catch(err => {
                throw err
            })
            .finally(() => {
            })
    });

    const handleEdit = (e) => {
        navigate(`/order/${e.target.id}`)
        console.log(e.target.id)
    }

    const handleDelete = (e) => {
        console.log(e.target.id)
        axios.delete(`https://json-server-api-product.herokuapp.com/orders/` + e.target.id)
            .then(res => {
                alert("Deleted Success")
            })
            .catch(err => {
                alert("Something wrong" + err)
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
        }
    }

    return (
        <div className='order-page'>
            <div className="row">
                <Title title='Quản lý đơn hàng'></Title>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <div className="row element-button">
                                <div className="col-sm-2">
                                    <Link to={'/order/add'} className="btn btn-add btn-sm" href="form-add-don-hang.html" title="Thêm">
                                    <i className="fas fa-plus"></i>Tạo mới đơn hàng
                                    </Link>
                                </div>
                                <div className="col-sm-2">
                                    <span className="btn btn-delete btn-sm" type="button" title="Xóa" >
                                    <i className="fas fa-trash-alt"></i> Xóa tất cả </span>
                                </div>
                            </div>
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>ID đơn hàng</th>
                                        <th>Khách hàng</th>
                                        <th>Đơn hàng</th>
                                        <th>Số lượng</th>
                                        <th>Tổng tiền</th>
                                        <th>Tình trạng</th>
                                        <th>Tính năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(order => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.customer}</td>
                                            <td>{order.orderName}</td>
                                            <td>{order.amount}</td>
                                            <td>{order.total}</td>
                                            <td>{order.status}</td>
                                            <td>
                                                <button id={order.id} className="btn btn-primary btn-sm edit" type="button" title="Sửa" onClick={handleEdit}>
                                                    <i id={order.id} className="fa fa-edit"></i>
                                                </button>
                                                <button id={order.id} className="btn btn-primary btn-sm trash" type="button" title="Xóa" onClick={handleDelete}>
                                                    <i id={order.id} className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
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