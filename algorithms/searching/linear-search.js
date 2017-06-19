////////////////////////////////////
//           Linear Search        //
////////////////////////////////////

Array.prototype.search = function (value) {
    for (let i = 0; i <= this.length; i++) {
        if (this[i] === value) {
            return i;
        }
    }
};
