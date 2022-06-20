import axios from 'axios';
import '../../../main.css'
import { useEffect, useState } from 'react';

export default function ProductPage() {

    const [products, setProducts] = useState([])
    const [status, setStatus] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/products/`)
            .then(res => {
                setProducts(res.data)
                for (let index = 0; index < res.data.length; index++) {
                    setStatus({ name: res.data[index].status })
                    console.log('status: ' + res.data[index].status)
                }

            })
            .catch(err => {
                throw err
            })
            .finally(() => {
                // console.log(status)
            })
    });
    const handleStatus = () => {
        console.log(status)
    }


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="tile">
                    <div className="tile-body">
                        <div className="row element-button">
                            <div className="col-sm-2">

                                <a className="btn btn-add btn-sm" href="form-add-san-pham.html" title="Thêm"><i className="fas fa-plus"></i>
                                    Tạo mới sản phẩm</a>
                            </div>
                            <div className="col-sm-2">
                                <a className="btn btn-delete btn-sm nhap-tu-file" type="button" title="Nhập" onClick="myFunction(this)"><i
                                    className="fas fa-file-upload"></i> Tải từ file</a>
                            </div>

                            <div className="col-sm-2">
                                <a className="btn btn-delete btn-sm print-file" type="button" title="In" onClick="myApp.printTable()"><i
                                    className="fas fa-print"></i> In dữ liệu</a>
                            </div>
                            <div className="col-sm-2">
                                <a className="btn btn-delete btn-sm print-file js-textareacopybtn" type="button" title="Sao chép"><i
                                    className="fas fa-copy"></i> Sao chép</a>
                            </div>

                            <div className="col-sm-2">
                                <a className="btn btn-excel btn-sm" href="" title="In"><i className="fas fa-file-excel"></i> Xuất Excel</a>
                            </div>
                            <div className="col-sm-2">
                                <a className="btn btn-delete btn-sm pdf-file" type="button" title="In" onClick="myFunction(this)"><i
                                    className="fas fa-file-pdf"></i> Xuất PDF</a>
                            </div>
                            <div className="col-sm-2">
                                <a className="btn btn-delete btn-sm" type="button" title="Xóa" onClick={handleStatus}><i
                                    className="fas fa-trash-alt"></i> Xóa tất cả </a>
                            </div>
                        </div>
                        <table className="table table-hover table-bordered" id="sampleTable">
                            <thead>
                                <tr>
                                    <th width="10"><input type="checkbox" id="all"></input></th>
                                    <th>Mã sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Ảnh</th>
                                    <th>Số lượng</th>
                                    <th>Tình trạng</th>
                                    <th>Giá tiền</th>
                                    <th>Danh mục</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <td></td>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.image}</td>
                                        <td>{product.amount}</td>
                                        <td><span className="badge bg-success" onLoad={(e) => { console.log(e.target) }}>{product.status}</span></td>
                                        <td>{product.price}</td>
                                        <td>{product.category}</td>
                                        <td>
                                        <button style={{marginRight: '5px'}} class="btn btn-primary btn-sm edit" type="button" title="Sửa"
                                                id="show-emp" data-toggle="modal" data-target="#ModalUP">
                                                <i class="fas fa-edit"></i>
                                            </button>
                                            <button  class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                                                onclick="myFunction(this)">
                                                <i class="fas fa-trash-alt"></i>
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
    )
}