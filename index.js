function solution(digits){
    let res = ''

    for (let i = 0; i < digits.length-4; i++) {
        if (digits.slice(i, i+5) > res) {
            res = digits.slice(i, i+5)
        }
    }
    return +res
}