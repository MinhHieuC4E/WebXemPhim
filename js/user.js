function displayDanhSach() {
    document.getElementById("myTable").innerHTML = "";
    let danhsach = JSON.parse(localStorage.getItem("DSPhim"));
    let a = "";
    for (let i = 0; i < danhsach.length; i++) {
        const ds = danhsach[i];
        a += `<tr>
                <td>${i + 1}</td>
                <td> <button onclick = detail('${ds.id}') type="button" class="btn btn-link">${ds.ten}</button></td>
                <td>${ds.theLoai}</td>
                <td>
                
                <!-- Button to Open the Modal -->
                <button type="button" onclick=ss('${ds.id}')  class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Thay đổi
                </button>

                <!-- The Modal -->
                <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Điền thông tin phim</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">id</span>
                        </div>
                        <input id="id1" class="form-control" placeholder="Nhập id...">
                    </div>

                    <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Tên phim</span>
                            </div>
                            <input id="ten1" class="form-control" placeholder="Nhập tên...">
                    </div>

                    <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Thể loại</span>
                            </div>
                            <input id="theLoai1" class="form-control" placeholder="Nhập thể loại...">
                    </div>

                    <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Nhà sản xuất</span>
                            </div>
                            <input id="nhaSanXuat1" class="form-control" placeholder="Nhập nhà sản xuất...">
                    </div>

                    <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Thời lượng</span>
                            </div>
                            <input id="thoiLuong1" class="form-control" placeholder="Nhập thời lượng...">
                    </div>

                    <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Năm sản xuất</span>
                            </div>
                            <input id="namSanXuat1" class="form-control" placeholder="Nhập năm sản xuất...">
                    </div>

                    <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Nội dung phim</span>
                            </div>
                            <input id="noiDung1" class="form-control" placeholder="Nhập mô tả về phim...">
                    </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick = fix()>Lưu lại</button>
                    </div>

                    </div>
                </div>
                </div>
                <button type="button" class="btn btn-danger" onclick = remove('${ds.id}')>Gỡ bỏ</button>
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

    $("#exampleModal").modal("hide");
    let newDS = JSON.parse(localStorage.getItem("DSPhim"));
    newDS.unshift(them);

    localStorage.setItem("DSPhim", JSON.stringify(newDS));
    displayDanhSach();
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

function fix() {
let Id = JSON.parse(localStorage.getItem("idfix"));

let NewDS = JSON.parse(localStorage.getItem("DSPhim"));

    let thayDoi = {};
    let a1 = document.getElementById("id1").value;
    let b1 = document.getElementById("ten1").value;
    let c1 = document.getElementById("theLoai1").value;
    let d1 = document.getElementById("nhaSanXuat1").value;
    let e1 = document.getElementById("noiDung1").value;
    let f1 = document.getElementById("thoiLuong1").value;
    let g1 = document.getElementById("namSanXuat1").value;
    
    thayDoi.id = a1;
    thayDoi.ten = b1;
    thayDoi.theLoai = c1;
    thayDoi.nhaSanXuat = d1;
    thayDoi.noiDung = e1;
    thayDoi.thoiLuong = f1;
    thayDoi.namSanXuat = g1;
    
    $("#myModal").modal("hide");  // ẩn hộp thoại
    
    for (let j = 0; j < NewDS.length; j++) {
        if (NewDS[j].id === Id) {
            NewDS[j] = thayDoi;
        }
    }
    console.log(NewDS);
    localStorage.setItem("DSPhim", JSON.stringify(NewDS));
    displayDanhSach();
}