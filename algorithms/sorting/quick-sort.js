////////////////
// Quick Sort //
////////////////

function swap(items, firstIndex, secondIndex){
    let temp = items[firstIndex];

    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    let l = left;
    let r = right;

    while (l <= r) {
        while (items[l] < pivot) {
            l++;
        }
        while (items[r] > pivot) {
            r--;
        }
        if (l <= r) {
            swap(items, l, r);
            l++;
            r--;
        }
    }
    return l;
}

function quickSort(items, left, right) {
    let index;

    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
