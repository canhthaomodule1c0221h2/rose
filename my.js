let revenue = +prompt("nhập vào doanh thu bán hàng");
if ( revenue < 100000000) {
    document.write("hoa hồng là " + 5/100);
}
else if (revenue < 1000000000) {
    document.write("hoa hồng là " + 10/100);
}
else {
    document.write("hoa hồng là " + 15/100);
}