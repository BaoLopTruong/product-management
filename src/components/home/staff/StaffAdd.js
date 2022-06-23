import "../../../main.css"

import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function StaffAdd() {

    const [staff, setStaff] = useState({});
    const [ newId, setNewId] = useState({});

  
    const navigate = useNavigate();
    // const userlogined = useSelector(state => state.userlogined);
    // const products = useSelector(state => state.products);

    useEffect(() => {
        axios.get("http://localhost:3001/staffs/")
        .then(res =>{
            console.log(res.data[res.data.length-1].id)
            setNewId(parseInt( res.data[res.data.length-1].id)+1)
        })
        .catch(err =>{
            console.log(err)
        })
        .finally(()=>{
            setStaff({
                ...staff,
                id: newId
            })
        })
    },[newId]);

    const handleChange = (e) => {
       
        setStaff({
            ...staff,
            [e.target.name]: e.target.value
        })
        console.log(staff)
    }
    const handleAdd = () => {
        // dispatch(addNewProduct(product))
        // alert("Add New Product Successfully");
        // console.log(products)
        // navigate('/product/')
        axios.post("http://localhost:3001/staffs/", staff)
        .then(res =>{
            alert("Add new Product Succesfully");
            navigate('/staff')
        })
        .catch(er =>{
            alert("some thing wrong")
        })
    }
    const  handleChangeImage =(event) => {
      
        if(event.target.files && event.target.files[0]){
          let reader = new FileReader();
          reader.onload = (event) => {
            setStaff({ ...staff, image: event.target.result });
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    return (
        <div className="staff-add-page">
            <div className="row">
                <div className="col-md-12">

                    <div className="tile">

                        <h3 className="tile-title">Tạo mới nhân viên</h3>
                        <div className="tile-body">
                            {/* <div className="row element-button">
                                <div className="col-sm-2">
                                    <a className="btn btn-add btn-sm" data-toggle="modal" data-target="#exampleModalCenter"><b><i
                                        className="fas fa-folder-plus"></i> Tạo chức vụ mới</b></a>
                                </div>

                            </div> */}
                            <form className="row">
                                <div className="form-group col-md-4">
                                    <label className="control-label">ID nhân viên</label>
                                    {/* <input className="form-control" type="text"> </input> */}
                                    <input className="form-control" type="text" name='id' readOnly value={newId}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Họ và tên</label>
                                    {/* <input className="form-control" type="text" > </input> */}
                                    <input className="form-control" type="text" name="name" onChange={handleChange}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Địa chỉ email</label>
                                    {/* <input className="form-control" type="text" > </input> */}
                                    <input className="form-control" type="text" name="email" onChange={handleChange}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Địa chỉ thường trú</label>
                                    {/* <input className="form-control" type="text" > </input> */}
                                    <input className="form-control" type="text" name="address" onChange={handleChange}></input>
                                </div>
                                <div className="form-group  col-md-4">
                                    <label className="control-label">Số điện thoại</label>
                                    {/* <input className="form-control" type="number" > </input> */}
                                    <input className="form-control" type="number" name="numberphone" onChange={handleChange} ></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Ngày sinh</label>
                                    {/* <input className="form-control" type="date"> </input> */}
                                    <input className="form-control" type="date" name="dateofbirth" onChange={handleChange}></input>
                                </div>
                                <div className="form-group  col-md-3">
                                    <label className="control-label">Nơi sinh</label>
                                    {/* <input className="form-control" type="text" > </input> */}
                                    <input className="form-control" name="hometown" onChange={handleChange} ></input>
                                </div>
                                {/* <div className="form-group col-md-3">
                                    <label className="control-label">Số CMND</label>
                                 
                                    <input className="form-control" type="number" name="cmnd" onChange={handleChange}></input>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Ngày cấp</label>
                                   
                                    <input  className="form-control" type="date"></input>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Nơi cấp</label>
                                   
                                     <input className="form-control" type="text"></input> 
                                </div> */}
                                <div className="form-group col-md-3">
                                    <label className="control-label">Giới tính</label>
                                    <select className="form-control" id="exampleSelect2" name="gender" onChange={handleChange}>
                                        <option value='none'>-- Chọn giới tính --</option>
                                        <option value='Nam'>Nam</option>
                                        <option value='Nữ'>Nữ</option>
                                    </select>
                                </div>

                                <div className="form-group  col-md-3">
                                    <label htmlFor="exampleSelect1" className="control-label">Chức vụ</label>
                                    <select className="form-control" id="exampleSelect1" name="position" onChange={handleChange}>
                                        <option value='none'>-- Chọn chức vụ --</option>
                                        <option value='Bán hàng'>Bán hàng</option>
                                        <option value='Tư vấn'>Tư vấn</option>
                                        <option value='Dịch vụ'>Dịch vụ</option>
                                        <option value='Thu Ngân'>Thu Ngân</option>
                                        <option value='Quản lý kho'>Quản lý kho</option>
                                        <option value='Bảo trì'>Bảo trì</option>
                                        <option value='Kiểm hàng'>Kiểm hàng</option>
                                        <option value='Bảo vệ'>Bảo vệ</option>
                                        <option value='Tạp vụ'>Tạp vụ</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Bằng cấp</label>
                                    <select className="form-control" id="exampleSelect3" name='degree' onChange={handleChange}>
                                        <option value='none'> -- Chọn bằng cấp --</option>
                                        <option value='Tốt nghiệp Đại Học'>Tốt nghiệp Đại Học</option>
                                        <option value='Tốt nghiệp Cao Đẳng'>Tốt nghiệp Cao Đẳng</option>
                                        <option value='Tốt nghiệp Phổ Thôn'>Tốt nghiệp Phổ Thông</option>
                                        <option value='Chưa tốt nghiệp'>Chưa tốt nghiệp</option>
                                        <option value='Không bằng cấp'>Không bằng cấp</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Tình trạng hôn nhân</label>
                                    <select className="form-control" id="exampleSelect2" name="married" onChange={handleChange}>
                                        <option value='none'>-- Chọn tình trạng hôn nhân --</option>
                                        <option value='Độc thân'>Độc thân</option>
                                        <option value='Đã kết hôn'>Đã kết hôn</option>
                                        <option value='Khác'>Khác</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-12">
                                    <label className="control-label">Ảnh 3x4 nhân viên</label>
                                    <div id="myfileupload">
                                        <input type="file" name="image" onChange={handleChangeImage}></input>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <button className="btn btn-save" type="button" onClick={handleAdd} >Lưu lại</button>
                        <Link to={'/staff'} className="btn btn-cancel" href="/doc/table-data-table.html" >Hủy bỏ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}