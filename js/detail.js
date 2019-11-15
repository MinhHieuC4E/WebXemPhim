// lay ra ds phim va chuyen str => oject
let dsPhim = JSON.parse(localStorage.getItem("DSPhim")); 

// lay id phim vua click
let Selected_id = localStorage.getItem("selected"); 

// tim va chi ra phim ng dung da chon
let PhimSelected;
for (let i = 0; i < dsPhim.length; i++) {
    const dt = dsPhim[i];
    if (dt.id === Selected_id) {
        PhimSelected = dt;
        break;
    }
}

let img = `<img class="anh" src="${PhimSelected.anh}"/>`;
document.getElementById('movie-image').innerHTML += img;

let name = `${PhimSelected.ten}`;
document.getElementById('ten-phim').innerHTML += name;

let infor = `
             <dl>
                <dt>Thể loại:</dt>
                <dd>${PhimSelected.theLoai}</dd>
                      
                <dt>Nhà sản xuất:</dt>
                <dd>${PhimSelected.nhaSanXuat}</dd>
                        
                <dt>Thời lượng phim:</dt>
                <dd>${PhimSelected.thoiLuong}</dd>
                       
                <dt>Năm sản xuất:</dt>
                <dd>${PhimSelected.namSanXuat}</dd>
                      
            </dl>
            `;
document.getElementById('if-phim').innerHTML += infor;

let text = `${PhimSelected.noiDung}`;
document.getElementById('noiDung').innerHTML += text;
                   