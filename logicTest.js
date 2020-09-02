const inputArray = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
const sortArray = (input) => {
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
    if (input[j] > input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
    }
    }
}
return input;
};

const removeDuplicateArray = (input) => {
let tempArray = [];
for (let index = 0; index < input.length; index++) {
    if (input[index].join("") !== (input[index + 1] || []).join("")) {
    tempArray.push(input[index]);
    }
}
return tempArray;
};

const createLabel = (input) => {
let label = [];
for (let i = 0; i < input.length; i++) {
    const temp = input[i].split("");
    label.push(sortArray(temp));
}
return removeDuplicateArray(sortArray(label));
};

const groupedAnagram = (input) => {
const label = createLabel(input);
let grouped = [];
for (let i = 0; i < label.length; i++) {
    let tempArray = [];
    for (let j = 0; j < input.length; j++) {
    if (label[i].join("") === sortArray(input[j].split("")).join("")) {
        tempArray.push(input[j]);
    }
    }
    grouped.push(tempArray);
}
return grouped;
};

console.log(JSON.stringify(groupedAnagram(inputArray)));