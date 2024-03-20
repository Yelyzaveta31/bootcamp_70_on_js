function sumSalary(arr, countTax, showMassege) {
    let totalSalary = 0;

    for (const key of arr) {
        const salaryAfterTax = key - countTax(key);
        totalSalary += salaryAfterTax;
    }

    const message = showMassege(totalSalary);
    return message;
}

let sal = [2200, 4000, 5000];

function showMassege(totalSalary) {
    return `Сума зарплат становить ${totalSalary}`;
}

function countTax(salary) {
    return salary * 0.2;
}

console.log(sumSalary(sal, countTax, showMassege));