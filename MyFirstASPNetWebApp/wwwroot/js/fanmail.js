////document.getElementById('btnSend').addEventListener("click", function () {
////    alert("From: " + document.getElementById('txtFrom').value +
////        ", Subject: " + document.getElementById("txtSubject").value +
////        ", Mesage: " + document.getElementById("txt.Message").value);
////})

$("#btnSend").click(function () {
    alert('From: ' + $('#txtFrom').val() +
        ", Subject: " + $('#txtSubject').val() +
        ", Message: " + $('#txtMessage').val());

    $('#picGanderson').fadeToggle();
})