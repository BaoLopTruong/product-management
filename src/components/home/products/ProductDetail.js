import '../../../main.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../navbar/Title';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      axios.get(`https://json-server-api-product.herokuapp.com/products/${productId}`)
        .then(res => {
          setProduct(res.data);
        })
        .catch(err => {
          throw err;
        })
        .finally(() => {
        })
    }
  }, [productId]);

  const handleCancel = (e) => {
    navigate('/product')
  }

  const handleSave = () => {
    axios.put(`https://json-server-api-product.herokuapp.com/products/${productId}`, product)
      .then(res => {
        alert("Update successfully");
        navigate('/product');
      })
      .catch(err => {
        alert("something wrong")
      })
  }

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeImage = (event) => {

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event) => {
        setProduct({ ...product, image: event.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <div className='product-detail'>
      <div className="row">
        <Title title='Quản lý sản phẩm/ Chỉnh sửa thông tin sản phẩm'></Title>
      </div>
      <div className="row">
        <div className="modal-body">
          <form className="row">
            <div className="form-group col-md-3">
              <label className="control-label">Mã sản phẩm </label>
              <input className="form-control" type="number" value={product.id || ""} placeholder="" name='id' readOnly></input>
            </div>
            <div className="form-group col-md-3">
              <label className="control-label">Tên sản phẩm</label>
              <input className="form-control" type="text" value={product.name || ""} name='name' onChange={handleChange} ></input>
            </div>
            <div className="form-group  col-md-3">
              <label className="control-label">Số lượng</label>
              <input className="form-control" type="number" value={product.amount || ""} name='amount' onChange={handleChange} ></input>
            </div>
            <div className="form-group col-md-3 ">
              <label htmlFor="exampleSelect1" className="control-label">Tình trạng</label>
              <select className="form-control" id="exampleSelect1" value={product.status || ""} name='status' onChange={handleChange}>
                <option value="none">-- Chọn tình trạng --</option>
                <option value="Còn hàng">Còn hàng</option>
                <option value="Hết hàng">Hết hàng</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="exampleSelect1" className="control-label">Danh mục</label>
              <select className="form-control" id="exampleSelect1" value={product.category || ""} name='category' onChange={handleChange}>
                <option value="none">-- Chọn danh mục --</option>
                <option value="Bàn ăn">Bàn ăn</option>
                <option value="Bàn thông minh">Bàn thông minh</option>
                <option value="Tủ">Tủ</option>
                <option value="Ghế gỗ">Ghế gỗ</option>
                <option value="Ghế sắt">Ghế sắt</option>
                <option value="Giường người lớn">Giường người lớn</option>
                <option value="Giường trẻ em">Giường trẻ em</option>
                <option value="Bàn trang điểm">Bàn trang điểm</option>
                <option value="Giá đỡ">Giá đỡ</option>
                <option value="Điện thoại di động">Điện thoại di động</option>
              </select>
            </div>
            <div className="form-group col-md-3 ">
              <label htmlFor="exampleSelect1" className="control-label">Nhà cung cấp</label>
              <select className="form-control" id="exampleSelect1" value={product.ncc || ""} name='ncc' onChange={handleChange}>
                <option value="none">-- Chọn nhà cung cấp --</option>
                <option value="Phong vũ">Phong vũ</option>
                <option value="Thế giới di động">Thế giới di động</option>
                <option value="FPT">FPT</option>
                <option value="Nội thất Thành Phát">Nội thất Thành Phát</option>
                <option value="Orther">Orther</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label className="control-label">Giá bán</label>
              <input className="form-control" type="text" value={product.price || ""} name='price' onChange={handleChange} ></input>
            </div>
            <div className="form-group col-md-12">
              <label className="control-label">Ảnh sản phẩm</label>
              <div id="myfileupload">
                <input type="file" id="uploadfile" name="image" onChange={handleChangeImage} ></input>
              </div>
            </div>
            <div className="form-group col-md-12">
              <label className="control-label">Mô tả sản phẩm</label>
              <textarea className="form-control" value={product.mota || ""} name="mota" id="mota" onChange={handleChange}></textarea>
            </div>
          </form>
          <button className="btn btn-save" type="button" onClick={handleSave}>Lưu lại</button>
          <button className="btn btn-cancel" type="button" onClick={handleCancel}>Hủy Bỏ</button>
          <br></br>
        </div>
      </div>
    </div>
  )

}