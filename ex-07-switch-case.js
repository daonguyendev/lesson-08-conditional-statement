let level = 2;
switch (level) {
    case 0:
        //Tính thuế cho thu nhập đến 5tr
        console.log(level);
        break;
    case 1:
        //Tính thuế cho thu nhập từ 5tr đến 10tr
        console.log(level);
        break;
    case 2:
        console.log(level);
        //Tính thuế cho thu nhập từ 10tr đến 18tr
        break;
    //...
        //Tính thuế cho thu nhập từ 18tr đến 32tr
        // break;
    default:
        //Không hợp lệ
        break;
}