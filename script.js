// range with prime//
let n = 15;
for ( var i = 2; i <= n; i++) {
    let a = 0;
    for (var j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            a = 1;
        }
    }
    if (a == 0){
    console.log("prime number" + i);
}
}

