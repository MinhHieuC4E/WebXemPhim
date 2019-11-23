// lay ra ds phim va chuyen str => oject
let dsPhim = JSON.parse(localStorage.getItem("DSPhim"));

// lay id phim vua click
let Selected_id = localStorage.getItem("selected");
function diem(){
// tim va chi ra phim ng dung da chon
let PhimSelected;
for (let i = 0; i < dsPhim.length; i++) {
    const dt = dsPhim[i];
    if (dt.id === Selected_id) {
        PhimSelected = dt;
        break;
    }
}


let img = `<img class="img-fluid" src="img/${PhimSelected.anh}" alt=""></img>`;

document.getElementById('movie-image').innerHTML += img;

let name = `${PhimSelected.ten}`;
document.getElementById('ten-phim').innerHTML += name;

let i = `<ol class="breadcrumb " style="border-left:5px solid chocolate;">
<li><a href="Windex.html"> Home </a></li>
<li class="active" > / ${PhimSelected.ten} </li>
</ol>`
document.getElementById('ten').innerHTML += i;
let infor = `
            <li><b>Năm:</b> <i>${PhimSelected.namSanXuat}</i></li>
            <li><b>Thể loại:</b><i> ${PhimSelected.theLoai}</i></li>
            <li><b>Nhà Sản Xuất:</b> <i>${PhimSelected.nhaSanXuat}</i></li>
            <li><b>Điểm IMDb:</b> <b class="bg-warning text-dark rounded ">${PhimSelected.IMDb}</b></li>
            <li><b>Thời Lượng:</b><i> ${PhimSelected.thoiLuong}</i></li>

           
            <li><b>Đạo diễn:</b> <i>${PhimSelected.daoDien}</i></li>
            <li><b>Diễn viên:</b> <i>${PhimSelected.dienVien}</i></li>
            <li><b>Quốc gia:</b> <i>${PhimSelected.quocGia}</i></li>
            <li><b>Ngôn ngữ:</b> <i>${PhimSelected.ngonNgu}</i></li>
                        
            `
document.getElementById('if-phim').innerHTML += infor;
let trailer=`
<iframe width="766" height="366" src="https://www.youtube.com/embed/${PhimSelected.trailer}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
document.getElementById("trailer").innerHTML+=trailer;
let text = `${PhimSelected.noiDung}`;
document.getElementById('noiDung').innerHTML += text;
  let rew=`${PhimSelected.review}`

  document.getElementById('rew').innerHTML += rew;
    let  t=parseInt(PhimSelected.IMDb);
    for (let i = 0; i < t; i++) {
         s=`<i class="fas fa-star" style="color: rgb(252, 228, 14);padding: 1% 0 2% 2%;"></i>`
         document.getElementById("danh-gia").innerHTML+=s
         
    }

}
diem();

    var stopVideo = function(element) {
        var iframe = element.querySelector( 'iframe');
        var video = element.querySelector( 'video' );
        if ( iframe ) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if ( video ) {
            video.pause();
        }
    };

