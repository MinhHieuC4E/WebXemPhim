let dsPhim = JSON.parse(localStorage.getItem("DSPhim"));

// lay id phim vua click
let theloai = localStorage.getItem("theloai");

// tim va chi ra phim ng dung da chon

for (let i = 0; i < dsPhim.length; i++) {
     let b = "";
     const dt = dsPhim[i].theLoai.includes(theloai);
     const nam = dsPhim[i].namSanXuat.includes(theloai);
     const qg = dsPhim[i].quocGia.includes(theloai);
     s=` ${theloai}`
     if (dt){

          s=`'${theloai}'`

          b = ` <div class="col-md-3 w3l-movie-gride-agile bg zoom">

          <div style="">
          <a onclick=detail('${dsPhim[i].id}') class="hvr-shutter-out-horizontal">

               <img src="img/${dsPhim[i].anh}" alt=" " />
               <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
          </a>
          </div>
          <div class="mid-1 agileits_w3layouts_mid_1_home">
          <div class="w3l-movie-text">
               <h6><a onclick=detail('${dsPhim[i].id}')>${dsPhim[i].ten}</a></h6>
               <p style="text-align: center;"> ${dsPhim[i].namSanXuat} </p>
               <p>(${dsPhim[i].thoiLuong})</p>
          </div>
          <div class="mid-2 agile_mid_2_home">



          </div>
          </div>
          <div class="ribben">
          <p>NEW</p>
          </div>
     </div>

                     `


document.getElementById("hanhdong").innerHTML += b;
     }
   
     if (nam) {

          b = ` <div class="col-md-3 w3l-movie-gride-agile bg zoom">

          <div style="">
          <a onclick=detail('${dsPhim[i].id}') class="hvr-shutter-out-horizontal">

               <img src="img/${dsPhim[i].anh}" alt=" " />
               <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
          </a>
          </div>
          <div class="mid-1 agileits_w3layouts_mid_1_home">
          <div class="w3l-movie-text">
               <h6><a onclick=detail('${dsPhim[i].id}')>${dsPhim[i].ten}</a></h6>
               <p style="text-align: center;"> ${dsPhim[i].namSanXuat} </p>
               <p>(${dsPhim[i].thoiLuong})</p>
          </div>
          <div class="mid-2 agile_mid_2_home">



          </div>
          </div>
          <div class="ribben">
          <p>NEW</p>
          </div>
     </div>

                     `


document.getElementById("hanhdong").innerHTML += b;
     }
     
     if (qg) {

          b = ` <div class="col-md-3 w3l-movie-gride-agile bg zoom">

          <div style="">
          <a onclick=detail('${dsPhim[i].id}') class="hvr-shutter-out-horizontal">

               <img src="img/${dsPhim[i].anh}" alt=" " />
               <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
          </a>
          </div>
          <div class="mid-1 agileits_w3layouts_mid_1_home">
          <div class="w3l-movie-text">
               <h6><a onclick=detail('${dsPhim[i].id}')>${dsPhim[i].ten}</a></h6>
               <p style="text-align: center;"> ${dsPhim[i].namSanXuat} </p>
               <p>(${dsPhim[i].thoiLuong})</p>
          </div>
          <div class="mid-2 agile_mid_2_home">



          </div>
          </div>
          <div class="ribben">
          <p>NEW</p>
          </div>
     </div>

                     `


document.getElementById("hanhdong").innerHTML += b;
     } 
}
document.getElementById("tl").innerHTML += s;  

     









