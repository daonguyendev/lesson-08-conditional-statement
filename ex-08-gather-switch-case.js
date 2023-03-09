let day = 2;

switch (day) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Day In Week");
        break;
    case 7:
    case 8:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day!");
        break;
}