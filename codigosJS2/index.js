const arrayNums = [1, 2, 3, 4];

const novoArray = arrayNums.map(multiplica);

function multiplica(num){
    return num * 10;
}

console.log(novoArray);