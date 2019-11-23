let  danhSachPhim = JSON.parse(localStorage.getItem("DSPhim"));

     let b = "";
     for (let i = 0; i < danhSachPhim.length; i++) {
         
          const hd = danhSachPhim[i].theLoai.includes('Phim hành động');
          const vt = danhSachPhim[i].theLoai.includes('Phim viễn tưởng');
          const kd = danhSachPhim[i].theLoai.includes('Phim kinh dị');
          const hai = danhSachPhim[i].theLoai.includes('Phim hài');
          const hh = danhSachPhim[i].theLoai.includes('Phim hoạt hình');
        


          if (hd) {

               b = ` <div class="col-md-3 w3l-movie-gride-agile bg  zoom">
                         
                                   <div style="">
                                   <a onclick=detail('${danhSachPhim[i].id}') class="hvr-shutter-out-horizontal">
                         
                                        <img src="img/${danhSachPhim[i].anh}" alt=" " />
                                        <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                                   </a>
                                   </div>
                                   <div class="mid-1 agileits_w3layouts_mid_1_home">
                                   <div class="w3l-movie-text">
                                        <h6><a href="single.html">${danhSachPhim[i].ten}</a></h6>
                                        <p style="text-align: center;"> ${danhSachPhim[i].namSanXuat} </p>
                                        <p>(${danhSachPhim[i].thoiLuong})</p>
                                   </div>
                                   <div class="mid-2 agile_mid_2_home">
                         
                         
                         
                                   </div>
                                   </div>
                                   <div class="ribben">
                                   <p>NEW</p>
                                   </div>
                              </div>
                         
                                              `


               document.getElementById("hd").innerHTML += b;
          }


          if (vt) {

               b = ` <div class="col-md-3 w3l-movie-gride-agile bg  zoom">
                         
                                   <div style="">
                                   <a onclick=detail('${danhSachPhim[i].id}') class="hvr-shutter-out-horizontal">
                         
                                        <img src="img/${danhSachPhim[i].anh}" alt=" " />
                                        <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                                   </a>
                                   </div>
                                   <div class="mid-1 agileits_w3layouts_mid_1_home">
                                   <div class="w3l-movie-text">
                                        <h6><a href="single.html">${danhSachPhim[i].ten}</a></h6>
                                        <p style="text-align: center;"> ${danhSachPhim[i].namSanXuat} </p>
                                        <p>(${danhSachPhim[i].thoiLuong})</p>
                                   </div>
                                   <div class="mid-2 agile_mid_2_home">
                         
                         
                         
                                   </div>
                                   </div>
                                   <div class="ribben">
                                   <p>NEW</p>
                                   </div>
                              </div>
                         
                                              `


               document.getElementById("vt").innerHTML += b;
          }
          if (kd) {

               b = ` <div class="col-md-3 w3l-movie-gride-agile bg  zoom">
                         
                                   <div style="">
                                   <a onclick=detail('${danhSachPhim[i].id}') class="hvr-shutter-out-horizontal">
                         
                                        <img src="img/${danhSachPhim[i].anh}" alt=" " />
                                        <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                                   </a>
                                   </div>
                                   <div class="mid-1 agileits_w3layouts_mid_1_home">
                                   <div class="w3l-movie-text">
                                        <h6><a href="single.html">${danhSachPhim[i].ten}</a></h6>
                                        <p style="text-align: center;"> ${danhSachPhim[i].namSanXuat} </p>
                                        <p>(${danhSachPhim[i].thoiLuong})</p>
                                   </div>
                                   <div class="mid-2 agile_mid_2_home">
                         
                         
                         
                                   </div>
                                   </div>
                                   <div class="ribben">
                                   <p>NEW</p>
                                   </div>
                              </div>
                         
                                              `


               document.getElementById("kd").innerHTML += b;
          }
          if (hh) {

               b = ` <div class="col-md-3 w3l-movie-gride-agile bg zoom">
                         
                                   <div class="">
                                   <a onclick=detail('${danhSachPhim[i].id}') class="hvr-shutter-out-horizontal">
                         
                                        <img src="img/${danhSachPhim[i].anh}" alt=" " />
                                        <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                                   </a>
                                   </div>
                                   <div class="mid-1 agileits_w3layouts_mid_1_home">
                                   <div class="w3l-movie-text">
                                        <h6><a href="single.html">${danhSachPhim[i].ten}</a></h6>
                                        <p style="text-align: center;"> ${danhSachPhim[i].namSanXuat} </p>
                                        <p>(${danhSachPhim[i].thoiLuong})</p>
                                   </div>
                                   <div class="mid-2 agile_mid_2_home">
                         
                         
                         
                                   </div>
                                   </div>
                                   <div class="ribben">
                                   <p>NEW</p>
                                   </div>
                              </div>
                              </div>
                         
                                              `


               document.getElementById("hh").innerHTML += b;
          }
          if (hai) {

               b = ` <div class="col-md-3 w3l-movie-gride-agile bg zoom">
                         
                                   <div style="">
                                   <a onclick=detail('${danhSachPhim[i].id}') class="hvr-shutter-out-horizontal">
                         
                                        <img src="img/${danhSachPhim[i].anh}" alt=" " />
                                        <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                                   </a>
                                   </div>
                                   <div class="mid-1 agileits_w3layouts_mid_1_home">
                                   <div class="w3l-movie-text">
                                        <h6><a href="single.html">${danhSachPhim[i].ten}</a></h6>
                                        <p style="text-align: center;"> ${danhSachPhim[i].namSanXuat} </p>
                                        <p>(${danhSachPhim[i].thoiLuong})</p>
                                   </div>
                                   <div class="mid-2 agile_mid_2_home">
                         
                         
                         
                                   </div>
                                   </div>
                                   <div class="ribben">
                                   <p>NEW</p>
                                   </div>
                              </div>
                         
                                              `


               document.getElementById("hai").innerHTML += b;
          }
          

     }








function theLoai(tl) {
     localStorage.setItem("theloai", tl);
     window.location.href = "theloai.html"
}



function detail(id) {
     localStorage.setItem("selected", id);
     window.location.href = "single.html";
}



function tk() {

     let a = document.getElementById("src").value
     localStorage.setItem("tk", a);

}
