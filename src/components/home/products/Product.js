import '../../../main.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
// import { useSelector, useDispatch } from "react-redux";
// import Clock from '../navbar/Clock';
// import { deleteProduct } from '../../../redux/action';

export default function ProductPage(props) {
    // const products = useSelector(state => state.products);
    // const dispatch = useDispatch();

    const navigate = useNavigate();

    const [products, setProducts] = useState([])
  

    useEffect(() => {
        axios.get(`http://localhost:3001/products/`)
            .then(res => {
                
              //console.log(res.data)
              sortProduct(res.data)
              setProducts(res.data)
            })
            .catch(err => {
                throw err
            })
            .finally(() => {
                console.log(products)
            })
    });

    const handleEdit = (e) => {
        navigate(`/product/${e.target.id}`)
        console.log(e.target.id)
    }
    const handleDelete = (e) => {
        console.log(e.target.id)
        axios.delete(`http://localhost:3001/products/` + e.target.id)
            .then(res => {
                alert("Deleted Success")
            })
            .catch(err => {
                alert("Something wrong" + err)
            })
    }
    const sortProduct = (products) => {
        for(let i =0; i< products.length; i++){
            if(products[i+1]){
                if(parseInt( products[i].id) > parseInt(products[i+1].id)){
                    let swap = products[i];
                   products[i] = products[i+1];
                   products[i+1] = swap;
                }
            }
            else{
                console.log("not ok")
            }
        }
        console.log(products)
        // if (products[13].id > products[14].id) {
        //     let swap = products[13];
        //     products[13] = products[14];
        //     products[14] = swap;
        //     console.log(products[13])
            
        // }
       // console.log("12" ,products[12])
    }

    return (
        <div className='product'>
            {/* <Clock name={'Danh mục sản phẩm'}></Clock> */}

            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <div className="row element-button">
                                <div className="col-sm-2">

                                    <Link to={'/product/add'} className="btn btn-add btn-sm" title="Thêm">
                                        <i className="fas fa-plus"></i> Tạo mới sản phẩm
                                    </Link>
                                </div>
                                <div className="col-sm-2">
                                    <span className="btn btn-delete btn-sm nhap-tu-file" type="button" title="Nhập" ><i
                                        className="fas fa-file-upload"></i> Tải từ file </span>
                                </div>

                                <div className="col-sm-2">
                                    <button onClick={sortProduct} className="btn btn-delete btn-sm print-file" type="button" title="In" ><i
                                        className="fas fa-print"></i> In dữ liệu</button>
                                </div>
                                <div className="col-sm-2">
                                    <span className="btn btn-delete btn-sm print-file js-textareacopybtn" type="button" title="Sao chép"><i
                                        className="fas fa-copy"></i> Sao chép</span>
                                </div>

                                <div className="col-sm-2">
                                    <span className="btn btn-excel btn-sm" href="" title="In"><i className="fas fa-file-excel"></i> Xuất Excel</span>
                                </div>
                                <div className="col-sm-2">
                                    <span className="btn btn-delete btn-sm pdf-file" type="button" title="In" ><i
                                        className="fas fa-file-pdf"></i> Xuất PDF</span>
                                </div>
                                <div className="col-sm-2">
                                    <span className="btn btn-delete btn-sm" type="button" title="Xóa"><i
                                        className="fas fa-trash-alt"></i> Xóa tất cả </span>
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
                                            <td title={product.mota}>{product.name}</td>
                                            <td style={{textAlign: 'center'}}><img style={{ width: "50px", height: '50px' }} src={product.image} alt='The product has no img' title={product.mota} /></td>
                                            <td>{product.amount}</td>
                                            <td><span className="badge bg-success">{product.status}</span></td>
                                            <td>{product.price}</td>
                                            <td>{product.category}</td>
                                            <td>

                                                <button style={{ marginRight: '5px' }} className="btn btn-primary btn-sm edit" type="button" title="Sửa"
                                                    id={product.id} data-toggle="modal" data-target="#ModalUP" onClick={handleEdit}>
                                                    <i id={product.id} className="fas fa-edit"></i>
                                                </button>

                                                <button id={product.id} className="btn btn-primary btn-sm trash" type="button" title="Xóa"
                                                    onClick={handleDelete}>
                                                    <i id={product.id} className="fas fa-trash-alt"></i>
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