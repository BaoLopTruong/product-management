import '../../../main.css'

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Title from '../navbar/Title';

export default function StaffPage() {

    const [staff, setStaff] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/staffs/")
            .then(res => {
                setStaff(res.data)
            })
            .catch(err => {
                throw err;
            })
    });

    const handleEdit = (e) => {
        navigate(`/staff/${e.target.id}`)
        console.log(e.target.id)
    }

    const handleDelete = (e) => {
        console.log(e.target.id)
        axios.delete(`http://localhost:3001/staffs/` + e.target.id)
            .then(res => {
                alert("Deleted Success")
            })
            .catch(err => {
                alert("Something wrong" + err)
            })
    }

    return (
        <div className='staff-page'>
            <div className="row">
                <Title title='Quản lý nhân viên'></Title>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <div className="row element-button">
                                <div className="col-sm-2">
                                    <Link to={'/staff/add'} className="btn btn-add btn-sm" title="Thêm">
                                        <i className="fas fa-plus"></i> Thêm nhân viên mới
                                    </Link>
                                </div>
                                <div className="col-sm-2">
                                    <span className="btn btn-delete btn-sm" type="button" title="Xóa">
                                    <i className="fas fa-trash-alt"></i> Xóa tất cả </span>
                                </div>
                            </div>
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        {/* <th width="10"><input type="checkbox" id="all"></input></th> */}
                                        <th>Id Nhân Viên</th>
                                        <th>Họ và Tên</th>
                                        <th>Ảnh</th>
                                        <th>Địa chỉ</th>
                                        <th>Ngày Sinh</th>
                                        <th>Giới Tính</th>
                                        <th>SĐT</th>
                                        <th>Chức vụ</th>
                                        <th>Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staff.map(staff => (
                                        <tr key={staff.id}>
                                            {/* <td></td> */}
                                            <td>{staff.id}</td>
                                            <td>{staff.name}</td>
                                            <td style={{ textAlign: 'center' }}><img style={{ width: "50px", height: '50px' }} src={staff.image} alt='The staff has no img' title={staff.mota} /></td>
                                            <td>{staff.address}</td>
                                            <td>{staff.dateofbirth}</td>
                                            <td>{staff.gender}</td>
                                            <td>{staff.numberphone}</td>
                                            <td>{staff.position}</td>
                                            <td>
                                              <div style={{textAlign: "center"}}>
                                              <button className="btn btn-primary btn-sm edit" type="button" title="Sửa"
                                                    id={staff.id} data-toggle="modal" data-target="#ModalUP" onClick={handleEdit}>
                                                    <i id={staff.id} className="fas fa-edit"></i>
                                                </button>
                                                <button id={staff.id} className="btn btn-primary btn-sm trash" type="button" title="Xóa"
                                                    onClick={handleDelete}>
                                                    <i id={staff.id} className="fas fa-trash-alt"></i>
                                                </button>
                                              </div>
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