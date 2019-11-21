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
    let img = `<img class="anh" style="width: 100%;" src="..\\img\\${PhimSelected.anh}"/>`;
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

                    <dt>IMDb:</dt>
                    <dd>${PhimSelected.IMDb}</dd>
                        
                </dl>
                `;
    document.getElementById('if-phim').innerHTML += infor;

    let text = `${PhimSelected.noiDung}`;
    document.getElementById('noi-dung').innerHTML += text;
}
disPlay();

