
let dsPhim = JSON.parse(localStorage.getItem("DSPhim"));


   

 
let tk_1 = localStorage.getItem("tk"); 
let str1=tk_1;
str1 = str1.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
str1 = str1.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
str1 = str1.replace(/ì|í|ị|ỉ|ĩ/g, "i");
str1 = str1.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
str1 = str1.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
str1 = str1.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
str1 = str1.replace(/đ/g, "d");
str1 = str1.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
str1 = str1.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
str1 = str1.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
str1 = str1.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
str1= str1.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
str1 = str1.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
str1 = str1.replace(/Đ/g, "D");


for (let i = 0; i < dsPhim.length; i++) {
    let str=dsPhim[i].ten;
          str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
          str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
          str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
          str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
          str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
          str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
          str = str.replace(/đ/g, "d");
          str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
          str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
          str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
          str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
          str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
          str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
          str = str.replace(/Đ/g, "D");
       
     
    
     
     const dt = dsPhim[i];

    const tk = str.toLowerCase().includes(str1.toLowerCase())
   
    g =`"${tk_1}"`
    console.log(tk_1);


    
    if(tk){
   
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
                 document.getElementById("timkiem").innerHTML += b;
      console.log(dt);
      console.log(tk);
      
      
    }
    
}

document.getElementById("key").innerHTML += g;



     
    
