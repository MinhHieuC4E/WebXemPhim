function displayDanhSach() {
    document.getElementById("myTable").innerHTML = ""; 
    let danhsach = JSON.parse(localStorage.getItem("DSPhim"));
    let a = "";
    for (let i = 0; i < danhsach.length; i++) {
        const ds = danhsach[i];
        a += `<tr>
                <td>${i+1}</td>
                <td> <button onclick = detail('${ds.id}') type="button" class="btn btn-link">${ds.ten}</button></td>
                <td>${ds.theLoai}</td>
                <td>
                    <button type="button" class="btn btn-primary">Thay đổi</button>
                    <button type="button" class="btn btn-danger" onclick = remove('${ds.id}')>Gỡ bỏ</button>
                </td>
            </tr>`
    }
    document.getElementById("myTable").innerHTML += a;
}
displayDanhSach();

function detail(id) {
    localStorage.setItem("selected",id);
    window.location.href = "../html/detail.html";
}



function add () {
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
    localStorage.setItem("DSPhim",JSON.stringify(newDS));
    displayDanhSach();
}

function remove (id) {

    let newDS = JSON.parse(localStorage.getItem("DSPhim"));
    for (let i = 0; i < newDS.length; i++) {
        const ds = newDS[i];
        if (ds.id === id) {
            newDS.splice(i,1);
        }
        
    }
    localStorage.setItem("DSPhim",JSON.stringify(newDS));
    displayDanhSach();
}

// function fix(id) {
//     let them = {};
//     let a = document.getElementById("id").value;
//     them.id = a;
//     let b = document.getElementById("ten").value;
//     them.ten = b;
//     let c = document.getElementById("theLoai").value;
//     them.theLoai = c;
//     let d = document.getElementById("nhaSanXuat").value;
//     them.nhaSanXuat = d
//     let e = document.getElementById("noiDung").value;
//     them.noiDung = e;
//     let f = document.getElementById("thoiLuong").value;
//     them.thoiLuong = f;
//     let g = document.getElementById("namSanXuat").value;
//     them.namSanXuat = g;
    
//     $("#exampleModal").modal("hide");
//     let newDS = JSON.parse(localStorage.getItem("DSPhim"));
//     for (let i = 0; i < newDS.length; i++) {
//         const ds = newDS[i];
//         if (ds.id === id) {
//             newDS[i] = them
//         }
        
//     }
//     console.log(newDS);
    
//     localStorage.setItem("DSPhim",JSON.stringify(newDS));
//     displayDanhSach();
// }