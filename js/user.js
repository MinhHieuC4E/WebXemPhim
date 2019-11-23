
function displayDanhSach() {
    document.getElementById("myTable").innerHTML = "";
    let danhsach = JSON.parse(localStorage.getItem("DSPhim"));
    
    
    let a = "";
    for (let i = 0; i < danhsach.length; i++) {
        const ds = danhsach[i];
        a += `<tr>
                <td>${i + 1}</td>
                <td> <button onclick = detail('${ds.id}') type="button" class="btn btn-link text-dark"><b>${ds.ten}</b></button></td>
                <td>${ds.theLoai}</td>
                <td>
                
                <!-- Button to Open the Modal -->
                <button type="button" onclick=ss('${ds.id}')  class="btn btn-warning" data-toggle="modal" data-target="#myModal">
                Thay đổi
                </button>

                <!-- The Modal -->
                <div class="modal" id="myModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Điền thông tin phim</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                                    <div class="row">
                                        <div class="col-6">

                                            <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">Tên phim</span>
                                                    </div>
                                                    <input id="ten1" class="form-control" placeholder="vd:pim22...">
                                            </div>
    
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">điểm IMDb</span>
                                                </div>
                                                <input id="IMDb1" class="form-control" placeholder="vd:8.5 ...">
                                            </div>

                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Quốc gia</span>
                                                </div>
                                                <input id="quocGia1" class="form-control" placeholder="...">
                                            </div>

                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Ngôn ngữ</span>
                                                </div>
                                                <input id="ngonNgu1" class="form-control" placeholder="...">
                                            </div>

                                            
                                        </div>
                                        <div class="col-6">

                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Thể loại</span>
                                                </div>
                                                <select id="theLoai1" class="form-control">
                                                    <option selected>Phim hành động</option>
                                                    <option>Phim kinh dị</option>
                                                    <option>Phim hoạt hình</option>
                                                    <option>Phim viễn tưởng</option>
                                                    <option>Phim hài</option>
                                                </select>
                                            </div>


                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Nhà sản xuất</span>
                                                </div>
                                                <input id="nhaSanXuat1" class="form-control" placeholder="...">
                                            </div>

                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Thời lượng</span>
                                                </div>
                                                <input id="thoiLuong1" class="form-control" placeholder="vd:90 phút...">
                                            </div>

                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Năm sản xuất</span>
                                                </div>
                                                <input id="namSanXuat1" class="form-control" placeholder="vd:2019...">
                                            </div>

                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">tên đạo diễn</span>
                                                </div>
                                                <input id="daoDien1" class="form-control" placeholder="...">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Tên các diễn viên</span>
                                        </div>
                                        <input id="dienVien1" class="form-control" placeholder="...">
                                    </div>

                                    <div class="form-group">
                                        <label for="noiDung">Nội dung phim:</label>
                                        <textarea class="form-control" placeholder="nhập nội dung..." rows="5"
                                            id="noiDung1"></textarea>
                                    </div>

                                    <div class="form-group">
                                        <label for="review">Review:</label>
                                        <textarea class="form-control" placeholder="nhập review..." rows="5"
                                            id="review1"></textarea>
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">link trailer youtube</span>
                                        </div>
                                        <input id="trailer1" class="form-control" placeholder="...">
                                        <p class="text-primary">Chỉ nhập phần mã (VD:
                                            https://www.youtube.com/watch?v=3KAHpaxdWHY => nhập: 3KAHpaxdWHY)</p>
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Ảnh phim</span>
                                        </div>
                                        <input id="anh1" class="form-control"
                                            placeholder="nhập tên ảnh (vd: anh.jpg)...">
                                        <p class="text-primary">Lưu ảnh vào thư mục theo đường dẫn: WebXemPhim/img</p>
                                    </div>

                                </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick = checkfix()>Lưu lại</button>
                    </div>

                    </div>
                </div>
                </div>
                <div>
                <button type="button" class="btn btn-danger" onclick = checkremove('${ds.id}')>Gỡ bỏ</button>
                </div>
                </td>
            </tr>`
    }
    document.getElementById("myTable").innerHTML += a;
}
displayDanhSach();

function detail(id) {
    localStorage.setItem("selected", id);
    window.location.href = "../html/detail.html";
}

function checkadd() {
    let newDS = JSON.parse(localStorage.getItem("DSPhim"));
    let ktid = document.getElementById("id").value;
    let ktname = document.getElementById("ten").value;
    let ktd = document.getElementById("nhaSanXuat").value;
    let kte = document.getElementById("noiDung").value;
    let ktf = document.getElementById("thoiLuong").value;
    let ktg = document.getElementById("namSanXuat").value;
    let kth = document.getElementById("IMDb").value;
    let kti = document.getElementById("daoDien").value;
    let ktj = document.getElementById("dienVien").value;
    let ktk = document.getElementById("quocGia").value;
    let ktl = document.getElementById("ngonNgu").value;
    let ktm = document.getElementById("trailer").value;
    let ktn = document.getElementById("review").value;
    let kto = document.getElementById("anh").value;
    
    let isNE = false;
    for (let i = 0; i < newDS.length; i++) {
        const ds = newDS[i];
        if (isNaN(kth) == true) {
            alert("điểm IMDb phải là kiểu số!");
            return true;
        }
        if (isNaN(ktg) == true) {
            alert("năm sẳn xuất phải là kiểu số!");
            return true;
        }
        if (isNaN(ktk) == false) {
            alert("Quốc gia phải là kiểu text!");
            return true;
        }
        if (isNaN(ktl) == false) {
            alert("Ngôn ngữ phải là kiểu text!");
            return true;
        }
        if (isNaN(kti) == false) {
            alert("Đạo diễn phải là kiểu text!");
            return true;
        }
        if (isNaN(ktj) == false) {
            alert("Diễn viên phải là kiểu text!");
            return true;
        }
        if (isNaN(ktd) == false) {
            alert("Nhà sản xuất phải là kiểu text!");
            return true;
        }
        if (kto == "") {
            alert("Ảnh không được bỏ trống!");
            return true;
        }   
        if (ktid == "") {
            alert("id không được bỏ trống!");
            return true;
        }   
        if (ds.id === ktid) {
            alert("Trùng id vui lòng nhập lại!");
            return true;
        } 
        if (ktname == "") {
            alert("Tên không được bỏ trống!");
            return true;
        }    
        if (ds.ten === ktname) {
            alert("Trùng tên vui lòng nhập lại!");
            return true;
        }
        if (ktd == "") {
            alert("Nhà sản xuất không được bỏ trống!");
            return true;
        }   
        if (kte == "") {
            alert("Nội dung không được bỏ trống!");
            return true;
        }   
        if (ktf == "") {
            alert("Thời lượng không được bỏ trống!");
            return true;
        }   
        if (ktg == "") {
            alert("Năm sản xuất không được bỏ trống!");
            return true;
        }   
        if (kth == "") {
            alert("IMDb không được bỏ trống!");
            return true;
        }   
        if (kti == "") {
            alert("Đạo diễn không được bỏ trống!");
            return true;
        }   
        if (ktj == "") {
            alert("Diễn viên không được bỏ trống!");
            return true;
        }   
        if (ktk == "") {
            alert("Quốc gia không được bỏ trống!");
            return true;
        }   
        if (ktl == "") {
            alert("Ngôn ngữ không được bỏ trống!");
            return true;
        }   
        if (ktm == "") {
            alert("Trailer không được bỏ trống!");
            return true;
        }   
        if (ktn == "") {
            alert("Review không được bỏ trống!");
            return true;
        }   
        
    }
    if (isNE == false) {
        add();
    }
}

function add() {
    let them = {};
    let a = document.getElementById("id").value;
    them.id = a;
    let b = document.getElementById("ten").value;
    them.ten = b;
    let c = document.getElementById("theLoai").value;
    them.theLoai = c;
    let d = document.getElementById("nhaSanXuat").value;
    them.nhaSanXuat = d
    let e = document.getElementById("noiDung").value;
    them.noiDung = e;
    let f = document.getElementById("thoiLuong").value;
    them.thoiLuong = f;
    let g = document.getElementById("namSanXuat").value;
    them.namSanXuat = g;
    let h = document.getElementById("IMDb").value;
    them.IMDb = h;
    let i = document.getElementById("daoDien").value;
    them.daoDien = i;
    let j = document.getElementById("dienVien").value;
    them.dienVien = j;
    let k = document.getElementById("quocGia").value;
    them.quocGia = k;
    let l = document.getElementById("ngonNgu").value;
    them.ngonNgu = l;
    let m = document.getElementById("trailer").value;
    them.trailer = m;
    let n = document.getElementById("review").value;
    them.review = n;
    let o = document.getElementById("anh").value;
    them.review = o;


    $("#exampleModal").modal("hide");
    let newDS = JSON.parse(localStorage.getItem("DSPhim"));
    newDS.unshift(them);

    localStorage.setItem("DSPhim", JSON.stringify(newDS));
    displayDanhSach();
}

function checkremove(id) {
    let ktXoa = confirm("bạn có chắc chắn gỡ bỏ!");
    if (ktXoa == true) {
        remove(id);
    }
}


function remove(id) {
    let newDS = JSON.parse(localStorage.getItem("DSPhim"));
    for (let i = 0; i < newDS.length; i++) {
        const ds = newDS[i];
        if (ds.id === id) {
            newDS.splice(i, 1);
        }

    }
    localStorage.setItem("DSPhim", JSON.stringify(newDS));
    displayDanhSach();
}

function ss(id) {
    localStorage.setItem("idfix", JSON.stringify(id));
}


function checkfix() {
    let newDS = JSON.parse(localStorage.getItem("DSPhim"));
    let ktname = document.getElementById("ten1").value;
    let ktd = document.getElementById("nhaSanXuat1").value;
    let kte = document.getElementById("noiDung1").value;
    let ktf = document.getElementById("thoiLuong1").value;
    let ktg = document.getElementById("namSanXuat1").value;
    let kth = document.getElementById("IMDb1").value;
    let kti = document.getElementById("daoDien1").value;
    let ktj = document.getElementById("dienVien1").value;
    let ktk = document.getElementById("quocGia1").value;
    let ktl = document.getElementById("ngonNgu1").value;
    let ktm = document.getElementById("trailer1").value;
    let ktn = document.getElementById("review1").value;
    let kto = document.getElementById("anh1").value;
    
    let isNE = false;
    for (let i = 0; i < newDS.length; i++) {
        const ds = newDS[i];
        if (kto == "") {
            alert("Ảnh không được bỏ trống!");
            return true;
        }   
        if (ktname == "") {
            alert("Tên không được bỏ trống!");
            return true;
        }    
        if (ds.ten === ktname) {
            alert("Trùng tên vui lòng nhập lại!");
            return true;
        }
        if (ktd == "") {
            alert("Nhà sản xuất không được bỏ trống!");
            return true;
        }   
        if (kte == "") {
            alert("Nội dung không được bỏ trống!");
            return true;
        }   
        if (ktf == "") {
            alert("Thời lượng không được bỏ trống!");
            return true;
        }   
        if (ktg == "") {
            alert("Năm sản xuất không được bỏ trống!");
            return true;
        }   
        if (kth == "") {
            alert("IMDb không được bỏ trống!");
            return true;
        }   
        if (kti == "") {
            alert("Đạo diễn không được bỏ trống!");
            return true;
        }   
        if (ktj == "") {
            alert("Diễn viên không được bỏ trống!");
            return true;
        }   
        if (ktk == "") {
            alert("Quốc gia không được bỏ trống!");
            return true;
        }   
        if (ktl == "") {
            alert("Ngôn ngữ không được bỏ trống!");
            return true;
        }   
        if (ktm == "") {
            alert("Trailer không được bỏ trống!");
            return true;
        }   
        if (ktn == "") {
            alert("Review không được bỏ trống!");
            return true;
        }

    }
    if (isNE == false) {
        checkfix2();
    }
}

function checkfix2() {
    let ktSua = confirm("bạn có chắc chắn thay đổi!");
    if (ktSua == true) {
        fix();
    }
}

function fix() {
let Id = JSON.parse(localStorage.getItem("idfix"));

let NewDS = JSON.parse(localStorage.getItem("DSPhim"));

    let them = {};
    let a = Id;
    them.id = a;
    let b = document.getElementById("ten1").value;
    them.ten = b;
    let c = document.getElementById("theLoai1").value;
    them.theLoai = c;
    let d = document.getElementById("nhaSanXuat1").value;
    them.nhaSanXuat = d
    let e = document.getElementById("noiDung1").value;
    them.noiDung = e;
    let f = document.getElementById("thoiLuong1").value;
    them.thoiLuong = f;
    let g = document.getElementById("namSanXuat1").value;
    them.namSanXuat = g;
    let h = document.getElementById("IMDb1").value;
    them.IMDb = h;
    let i1 = document.getElementById("daoDien1").value;
    them.daoDien = i1;
    let j1 = document.getElementById("dienVien1").value;
    them.dienVien = j1;
    let k = document.getElementById("quocGia1").value;
    them.quocGia = k;
    let l = document.getElementById("ngonNgu1").value;
    them.ngonNgu = l;
    let m = document.getElementById("trailer1").value;
    them.trailer = m;
    let n = document.getElementById("review1").value;
    them.review = n;
    let o = document.getElementById("anh1").value;
    them.review = o;

    
    $("#myModal").modal("hide");  // ẩn hộp thoại
    
    for (let j = 0; j < NewDS.length; j++) {
        if (NewDS[j].id === Id) {
            NewDS[j] = them;
        }
    }
   
    localStorage.setItem("DSPhim", JSON.stringify(NewDS));
    displayDanhSach();
}
