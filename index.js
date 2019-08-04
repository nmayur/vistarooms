(() => {

    removeDuplicate = (arr) => {
        var exists = {},
            outArr = [],
            elm;

        for (var i = 0; i < arr.length; i++) {
            elm = arr[i];
            if (!exists[elm]) {
                outArr.push(elm);
                exists[elm] = true;
            }
            console.log('elem : ' + elm);
            console.log('ip array :' + arr);
            console.log(exists);
            console.log('dic check :' + !exists[elm]);
            console.log('unique arr : ' + outArr);
            console.log(exists);
            console.log('-------------------------------------');
        }
        return outArr;
    }

    test = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
    // removeDuplicate(test);

    function missingNumber(arr) {
        var n = arr.length + 1,
            sum = 0,
            expectedSum = n * (n + 1) / 2;

        for (var i = 0, len = arr.length; i < len; i++) {
            sum += arr[i];
        }

        console.log(expectedSum - sum);

        return expectedSum - sum;
    }

    // missingNumber([52, 53, 54, 56, 57]);

})();