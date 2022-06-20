import '../../../main.css'
import { useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => { 
        axios.get(`http://localhost:3001/products/${productId}`)
        .then(res =>{
            setProduct(res.data);
        })
        .catch(err =>{
            throw err;
        })
       
    });

    const handleCancel = (e) =>{
        navigate('/product')
    }

    return (
   
        <div className="modal-body">
        <div className="row">
          <div className="form-group  col-md-12">
            <span className="thong-tin-thanh-toan">
              <h5>Chỉnh sửa thông tin sản phẩm cơ bản</h5>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
              <label className="control-label">Mã sản phẩm </label>
              <input className="form-control" type="number" value={product.id || ""}></input>
            </div>
          <div className="form-group col-md-6">
              <label className="control-label">Tên sản phẩm</label>
            <input className="form-control" type="text" value={product.name || ""}></input>
          </div>
          <div className="form-group  col-md-6">
              <label className="control-label">Số lượng</label>
            <input className="form-control" type="number" value={product.amount || ""}></input>
          </div>
          <div className="form-group col-md-6 ">
              <label htmlFor="exampleSelect1" className="control-label">Tình trạng sản phẩm</label>
              <select className="form-control" id="exampleSelect1">
                <option>Còn hàng</option>
                <option>Hết hàng</option>
                <option>Đang nhập hàng</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label className="control-label">Giá bán</label>
              <input className="form-control" type="text" value={product.price || ""}></input>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="exampleSelect1" className="control-label">Danh mục</label>
              <select className="form-control" id="exampleSelect1">
                <option>Bàn ăn</option>
                <option>Bàn thông minh</option>
                <option>Tủ</option>
                <option>Ghế gỗ</option>
                <option>Ghế sắt</option>
                <option>Giường người lớn</option>
                <option>Giường trẻ em</option>
                <option>Bàn trang điểm</option>
                <option>Giá đỡ</option>
              </select>
            </div>
        </div>
        <br></br>

          <br></br>
        <button className="btn btn-save" type="button">Lưu lại</button>
        <button className="btn btn-cancel" type="button" onClick={handleCancel}>Hủy Bỏ</button>

        {/* <a className="btn btn-cancel" data-dismiss="modal" href="#">Hủy bỏ</a> */}
        <br></br>
      </div>
    )

}