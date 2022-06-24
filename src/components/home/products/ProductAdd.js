import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../navbar/Title';

export default function ProductAdd() {

    const [product, setProduct] = useState({});
    const [ newId, setNewId] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/products/")
        .then(res =>{
            console.log(res.data[res.data.length-1].id)
            setNewId(parseInt( res.data[res.data.length-1].id) + 1 )
        })
        .catch(err =>{
            console.log(err)
        })
        .finally(()=>{
            setProduct({
                ...product,
                id: newId
            })
        })
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
        console.log(product)
    }

    const handleAdd = () => {

        axios.post("http://localhost:3001/products/", product)
        .then(res =>{
            alert("Add new Product Succesfully");
            navigate('/product')
        })
        .catch(err =>{
            alert("some thing wrong")
        })
    }

    const  handleChangeImage =(event) => {
        if(event.target.files && event.target.files[0]){
          let reader = new FileReader();
          reader.onload = (event) => {
            setProduct({ ...product, image: event.target.result });
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    return (
        <div className="product-add">
              <div className="row">
                <Title title='Quản lý sản phẩm/ Tạo mới sản phẩm'></Title>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <div className="row element-button">
                                <div className="col-sm-2">
                                    <span className="btn btn-add btn-sm" data-toggle="modal" data-target="#exampleModalCenter"><i
                                        className="fas fa-folder-plus"></i> Thêm nhà cung cấp</span>
                                </div>
                                <div className="col-sm-2">
                                    <span className="btn btn-add btn-sm" data-toggle="modal" data-target="#adddanhmuc"><i
                                        className="fas fa-folder-plus"></i> Thêm danh mục</span>
                                </div>
                                <div className="col-sm-2">
                                    <span className="btn btn-add btn-sm" data-toggle="modal" data-target="#addtinhtrang"><i
                                        className="fas fa-folder-plus"></i> Thêm tình trạng</span>
                                </div>
                            </div>
                            <form className="row">
                                <div className="form-group col-md-3">
                                    <label className="control-label">Mã sản phẩm </label>
                                    <input className="form-control" type="number" placeholder="" name='id' readOnly value={newId}></input>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Tên sản phẩm</label>
                                    <input className="form-control" type="text" name='name' onChange={handleChange} ></input>
                                </div>
                                <div className="form-group  col-md-3">
                                    <label className="control-label">Số lượng</label>
                                    <input className="form-control" type="number" name='amount' onChange={handleChange} ></input>
                                </div>
                                <div className="form-group col-md-3 ">
                                    <label htmlFor="exampleSelect1" className="control-label">Tình trạng</label>
                                    <select className="form-control" id="exampleSelect1" name='status' onChange={handleChange}>
                                        <option value="none">-- Chọn tình trạng --</option>
                                        <option value="Còn hàng">Còn hàng</option>
                                        <option value="Hết hàng">Hết hàng</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="exampleSelect1" className="control-label">Danh mục</label>
                                    <select className="form-control" id="exampleSelect1" name='category' onChange={handleChange}>
                                        <option value="none">-- Chọn danh mục --</option>
                                        <option value="Bàn ăn">Bàn ăn</option>
                                        <option value="Bàn thông minh">Bàn thông minh</option>
                                        <option value="Tủ">Tủ</option>
                                        <option value="Ghế gỗ">Ghế gỗ</option>
                                        <option value="Ghế sắt">Ghế sắt</option>
                                        <option value="Giường người lớn">Giường người lớn</option>
                                        <option value="Giường trẻ em">Giường trẻ em</option>
                                        <option value="Bàn trang điểm">Bàn trang điểm</option>
                                        <option value="Điện thoại di động">Điện thoại di động</option>
                                        <option value="Giá đỡ">Giá đỡ</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3 ">
                                    <label htmlFor="exampleSelect1" className="control-label">Nhà cung cấp</label>
                                    <select className="form-control" id="exampleSelect1" name='ncc' onChange={handleChange}>
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
                                    <input className="form-control" type="text" name='price' onChange={handleChange} ></input>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Giá vốn</label>
                                    <input className="form-control" type="text" name='capital' onChange={handleChange} ></input>
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="control-label">Ảnh sản phẩm</label>
                                    <div id="myfileupload">
                                        <input type="file" id="uploadfile" name="image" onChange={handleChangeImage} ></input>
                                    </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="control-label">Mô tả sản phẩm</label>
                                    <textarea className="form-control" name="mota" id="mota" onChange={handleChange}></textarea>
                                    <script>CKEDITOR.replace('mota');</script>
                                </div>
                            </form>
                        </div>
                        <button className="btn btn-save" type="button" onClick={handleAdd}>Lưu lại</button>
                        <Link to={'/product'} className="btn btn-cancel" >Hủy bỏ</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}