//บวก
function plus() {
    let x =  document.getElementById('x').value;
    let y =  document.getElementById('y').value;
    let z = +x + +y;
    document.getElementById('z').value = z
}

//ลบ
function minus() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let z = +x - +y;
    document.getElementById('z').value = z
}

//คูณ
function mul() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let z = +x * +y;
    document.getElementById('z').value = z
}

//หาร
function divide() {
    let x =  document.getElementById('x').value;
    let y =  document.getElementById('y').value;
    let z = +x / +y;
    document.getElementById('z').value = z
}