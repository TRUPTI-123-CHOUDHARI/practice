function reverseString(str) {

    var rev = str.split("").reverse(" ").join("");
    console.log(rev);
}
reverseString("hello")