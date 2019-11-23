// lay ra ds phim va chuyen str => oject
let dshai = JSON.parse(localStorage.getItem("DShai")); 

// lay id phim vua click
let Selected_id = localStorage.getItem("selected"); 

// tim va chi ra phim ng dung da chon
let PhimSelected;
for (let i = 0; i < dshai.length; i++) {
    

          let b = "";
        
               b += ` <div class="col-md-3 w3l-movie-gride-agile bg">
     
                         <div style="">
                         <a onclick=detail('${dt.id}') class="hvr-shutter-out-horizontal">
               
                              <img src="${dt.anh}" alt=" " />
                              <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                         </a>
                         </div>
                         <div class="mid-1 agileits_w3layouts_mid_1_home">
                         <div class="w3l-movie-text">
                              <h6><a href="single.html">${dss.ten}</a></h6>
                              <p style="text-align: center;"> ${dt.namSanXuat} </p>
                              <p>(${dt.thoiLuong})</p>
                         </div>
                         <div class="mid-2 agile_mid_2_home">
               
               
               
                         </div>
                         </div>
                         <div class="ribben">
                         <p>NEW</p>
                         </div>
                    </div>
             
                                    `
          }
     let tl=`<a onclick= >Hành Động</a>`
     document.getElementById("hai").innerHTML += b;
     
          document.getElementById("hai").innerHTML += b;
     
  


