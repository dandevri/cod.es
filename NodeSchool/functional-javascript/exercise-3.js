function doubleAll(numbers) {
    var doubles = numbers.map(function(number) {
        return number * 2;
    })

    return doubles;
}

module.exports = doubleAll;