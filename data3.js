
// let dsTheLoai = ["Phim hành động","Phim viễn tưởng","Phim hoạt hình","Phim kinh di","Phim hài"]
let  danhSachPhim = JSON.parse(localStorage.getItem("DSPhim"));


 
     for (let i = 0; i < danhSachPhim.length; i++) {
          const dx =danhSachPhim[i].namSanXuat.includes('2016');
          
          
          
          if (dx) {
               //              
                              


                              let s = `
                             
                              <div class="col-md-3 ">
                             
                              <div class="zoom ">
                              <a  onclick=detail('${danhSachPhim[i].id}')>
                              <div class="card car" style=" text-align: center;  margin-top:10%">
                                <img src="img/${danhSachPhim[i].anh}"  style=" height:250px ; " class="card-img-top" alt="...">
                                <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                                <div class="text-dark">
                                    <p> ${danhSachPhim[i].ten} <br> ${danhSachPhim[i].namSanXuat}<br>(${danhSachPhim[i].thoiLuong})</p>
                                   
                                  
                                  </div>
                                </div></a></div>
                          
                          </div>`
                              document.getElementById("dx").innerHTML += s;
                              
                         }
                        
                         
                         
                         


     }
     
     
    
     function detail(id) {
          localStorage.setItem("selected", id);
          window.location.href = "single.html";
     }

     function theLoai(tl) {
          localStorage.setItem("theloai", tl);
          window.location.href = "theloai.html"
     }
     
     
   
     
     
     
     function tkk() {
          
          let a = document.getElementById("src").value;
          localStorage.setItem("tk", a);
         
}
tkk();


