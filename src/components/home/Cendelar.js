

export default function Cenderlar() {

    return (
        <div className="cendelar">
            <div className="row">
                <div className="col-md-12">
                    <div className="app-title">
                        <ul className="app-breadcrumb breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><b>Lịch công tác</b></a></li>
                        </ul>
                        <div id="clock"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div id="external-events">
                                        <h4 className="mb-4">Kéo sự kiện thả vào</h4>
                                        <div className="fc-event"><b>Họp công ty</b></div>
                                        <div className="fc-event"><b>Họp báo</b></div>
                                        <div className="fc-event"><b>Mừng sinh nhật</b></div>
                                        <div className="fc-event"><b>Nghĩ lễ</b></div>
                                        <div className="fc-event"><b>Đi công tác</b></div>
                                        <div className="fc-event"><b>Gặp khách hàng</b></div>
                                        <div className="fc-event"><b>Tổ chức du lịch</b></div>
                                        <p className="animated-checkbox mt-20">
                                            <label>
                                                {/* <input id="drop-remove" type="checkbox"> </input> */}
                                                <input></input>
                                                <span className="label-text">Hủy bỏ sau khi thả</span> 
                                            </label>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div id="calendar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}