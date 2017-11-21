function centuryFromYear(year) {
    //1st century lasts from 1 to 100
    //second century from 101 to 200
    //divide year by 100
    let century = Math.floor((year - 1) / 100) + 1;
    return century;
}