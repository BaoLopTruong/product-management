
import '../../../main.css'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../navbar/Title';

export default function StaffDetail() {
    const { staffId } = useParams();
    const [staff, setStaff] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (staffId) {
            axios.get(`https://json-server-api-product.herokuapp.com/staffs/${staffId}`)
                .then(res => {
                    setStaff(res.data);

                })
                .catch(err => {
                    throw err;
                })
                .finally(() => {

                })
        }
    }, [staffId]);

    const handleSave = () => {
        axios.put(`https://json-server-api-product.herokuapp.com/staffs/${staffId}`, staff)
            .then(res => {
                alert("Update successfully");
                navigate('/staff');
            })
            .catch(err => {
                alert("something wrong")
            })
    }

    const handleChange = (e) => {
        setStaff({
            ...staff,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeImage = (event) => {

        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event) => {
                setStaff({ ...staff, image: event.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <div className="staff-detail">
            <div className="row">
                <Title title='Quản lý nhân viên/ Chỉnh sửa thông tin nhân viên'></Title>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <form className="row">
                                <div className="form-group col-md-4">
                                    <label className="control-label">ID nhân viên</label>
                                    <input className="form-control" type="text" name='id' readOnly value={staffId}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Họ và tên</label>
                                    <input className="form-control" type="text" name="name" value={staff.name || ""} onChange={handleChange}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Địa chỉ email</label>
                                    <input className="form-control" type="text" name="email" value={staff.email || ""} onChange={handleChange}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Địa chỉ thường trú</label>
                                    <input className="form-control" type="text" name="address" value={staff.address || ""} onChange={handleChange}></input>
                                </div>
                                <div className="form-group  col-md-4">
                                    <label className="control-label">Số điện thoại</label>
                                    <input className="form-control" type="number" name="numberphone" value={staff.numberphone || ""} onChange={handleChange} ></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="control-label">Ngày sinh</label>
                                    <input className="form-control" type="date" name="dateofbirth" value={staff.dateofbirth || ""} onChange={handleChange}></input>
                                </div>
                                <div className="form-group  col-md-3">
                                    <label className="control-label">Nơi sinh</label>
                                    <input className="form-control" name="hometown" value={staff.hometown || ""} onChange={handleChange} ></input>
                                </div>
                                <div className="form-group col-md-3">
                                    <label className="control-label">Giới tính</label>
                                    <select className="form-control" id="exampleSelect2" name="gender" value={staff.gender || ""} onChange={handleChange}>
                                        <option value='none'>-- Chọn giới tính --</option>
                                        <option value='Nam'>Nam</option>
                                        <option value='Nữ'>Nữ</option>
                                    </select>
                                </div>
                                <div className="form-group  col-md-3">
                                    <label htmlFor="exampleSelect1" className="control-label">Chức vụ</label>
                                    <select className="form-control" id="exampleSelect1" name="position" value={staff.position || ""} onChange={handleChange}>
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
                                    <select className="form-control" id="exampleSelect3" name='degree' value={staff.degree || ""} onChange={handleChange}>
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
                                    <select className="form-control" id="exampleSelect2" name="married" value={staff.married || ""} onChange={handleChange}>
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
                        <button className="btn btn-save" type="button" onClick={handleSave} >Lưu lại</button>
                        <Link to={'/staff'} className="btn btn-cancel" href="/doc/table-data-table.html" >Hủy bỏ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}