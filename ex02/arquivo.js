function fibonacci (num) {
    let a = 0;
    let b = 1;
    let temp;

    if (num === 0) {
        return "O número 0 pertence";
    }

    while (b <= num) {
        temp = b;
        b = a+b ;
        a = temp;
    }
    if (a === num) {
        return `O número ${num} pertence`;
    } else {
        return `O número ${num} não pertence`
    }
}
