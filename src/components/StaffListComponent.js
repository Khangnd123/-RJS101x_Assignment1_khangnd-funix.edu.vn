import React, { Component } from "react";

import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
//import replace from "classNames";
import dateFormat from "dateformat";

class staFF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lisT: STAFFS,
      TTNV: null,
      Mem: DEPARTMENTS,
    };
  }

  Hien_Thi() {
    let col_ = document.getElementById("view").value;
    let i;
    let element = document.getElementById("dsItem");
    let children = element.childNodes;

    let col_xx6 = document.getElementById("lk").classList.contains("col-6");
    let col_xx4 = document.getElementById("lk").classList.contains("col-4");
    let col_xx2 = document.getElementById("lk").classList.contains("col-2");
    console.log(col_xx6, col_xx4, col_xx2);
    if (col_ != null) {
      if (col_xx6 === true && col_xx4 === false && col_xx2 === false) {
        for (i = 0; i < 16; i++) {
          children[i].classList.replace("col-6", "col-" + col_);
        }
      } else if (col_xx6 === false && col_xx4 === true && col_xx2 === false) {
        for (i = 0; i < 16; i++) {
          children[i].classList.replace("col-4", "col-" + col_);
        }
      } else if (col_xx6 === false && col_xx4 === false && col_xx2 === true) {
        for (i = 0; i < 16; i++) {
          children[i].classList.replace("col-2", "col-" + col_);
        }
      }
    }
  }

  onclickTT(ls) {
    this.setState({ TTNV: this.state.lisT[ls] });

    console.log(this.state.TTNV);
  }
  renderTTNV(ls) {
    if (ls != null) {
      return (
        <div className="col-5">
          <p>ID : {ls.id}</p>
          <p>Họ và tên : {ls.name}</p>
          <p>Ngày vào công ty : {dateFormat(ls.doB, "dd/mm/yyyy")}</p>
          <p>Phòng ban : {ls.department.name}</p>
          <p>Số ngày nghỉ còn lại : {ls.annualLeave}</p>
          <p>Số ngày đã làm thêm : {ls.overTime}</p>
        </div>
      );
    } else {
      console.log("dsadas");
    }
  }
  render() {
    const menu = this.state.lisT.map((ls) => {
      return (
        <div key={ls.id} className="Cot_HT col-6 " id="lk">
          <p onClick={() => this.onclickTT(ls.id)}>{ls.name}</p>
        </div>
      );
    });

    return (
      <div className="container1 ">
        <div className="row aa">
          <div className="col-8">
            <h2>Ứng dụng quản lý nhân sự v1.0 </h2>
          </div>

          <select id="view" className="col-3" onClick={this.Hien_Thi}>
            <option value="6">2 cột</option>
            <option value="4">3 cột</option>
            <option value="2">6 cọt</option>
          </select>
        </div>
        <div className="row" id="dsItem">
          {menu}
        </div>
        {this.renderTTNV(this.state.TTNV)}
      </div>
    );
  }
}

export default staFF;
