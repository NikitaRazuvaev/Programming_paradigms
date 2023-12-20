function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Найден элемент, возвращаем индекс
        } else if (arr[mid] < target) {
            left = mid + 1; // Искомый элемент в правой половине
        } else {
            right = mid - 1; // Искомый элемент в левой половине
        }
    }

    return -1; // Элемент не найден
}

// Пример использования
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 10;
const resultIndex = binarySearch(sortedArray, targetElement);

console.log(resultIndex);