// lay ra ds phim va chuyen str => oject
let dsPhim = JSON.parse(localStorage.getItem("DSPhim"));
// lay id phim vua click
let Selected_id = localStorage.getItem("selected");
// tim va chi ra phim ng dung da chon

function disPlay() {

    let PhimSelected;
    for (let i = 0; i < dsPhim.length; i++) {
        const dt = dsPhim[i];
        if (dt.id === Selected_id) {
            PhimSelected = dt;
            break;
        }
    }
    let tl = `<iframe width="100%" height="366" src="https://www.youtube.com/embed/${PhimSelected.trailer}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.getElementById('trailer').innerHTML += tl;

    let img = `<img class="img-fluid" src="..\\img\\${PhimSelected.anh}" alt=""></img>`;
    document.getElementById('movie-image').innerHTML += img;

    let name = `${PhimSelected.ten}`;
    document.getElementById('ten-phim').innerHTML += name;

    let text = `${PhimSelected.noiDung}`;
    document.getElementById('noiDung').innerHTML += text;

    let rv = `${PhimSelected.review}`
    document.getElementById('review').innerHTML += rv;

    let infor = `
                <li><b>Năm:</b> <i>${PhimSelected.namSanXuat}</i></li>
                <li><b>Thể loại:</b><i> ${PhimSelected.theLoai}</i></li>
                <li><b>Nhà Sản Xuất:</b> <i>${PhimSelected.nhaSanXuat}</i></li>
                <li><b>Thời Lượng:</b><i> ${PhimSelected.thoiLuong}</i></li>

                <li><b>Điểm IMDb:</b> <i>${PhimSelected.IMDb}</i></li>
                <li><b>Đạo diễn:</b> <i>${PhimSelected.daoDien}</i></li>
                <li><b>Diễn viên:</b> <i>${PhimSelected.dienVien}</i></li>
                <li><b>Quốc gia:</b> <i>${PhimSelected.quocGia}</i></li>
                <li><b>Ngôn ngữ:</b> <i>${PhimSelected.ngonNgu}</i></li>
                `;
    document.getElementById('if-phim').innerHTML += infor;

    let t = parseInt(PhimSelected.IMDb);
    console.log(PhimSelected.IMDb);
    
    for (let i = 0; i < t; i++) {
        s=`<i class="fas fa-star" style="padding: 0px 1% 4px 0%; color: rgb(252, 228, 14);"></i>`
        document.getElementById('danh-gia').innerHTML += s;
    }
}
disPlay();

var stopVideo = function ( element ) {
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