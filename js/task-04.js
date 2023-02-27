// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов - сотрудников, и каждому из объектов
//        будет добавлять новое свойство "salary", хранящее зарплату сотрудника.
//        Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//            • "director" — 9000;
//            • "manager" — 1500;
//            • "programmer" — 10000;
//            • для остальных значений — 1000.
//        После выполнения функции — вывести информацию о сотрудниках.


const workers = [
    { name: 'Vasya', sName: 'Matsevko', age: 40, occupation: 'director' },
    { name: 'Kesha', sName: 'Fedorov', age: 24, occupation: 'manager' },
    { name: 'Randy', sName: 'Litin', age: 21, occupation: 'programmer' },
];

const refs = document.querySelector(".workersList");
const value = workers.map((oc => {
    return oc.occupation
}))




const userMarkup = workers => {
    return workers
        .map(({ name, sName, age, occupation, salary}) => {
            return `<li class="li-item">
      <h3>${name}</h3>
    <p> 
      Second Name: ${sName} <br/>
       age: ${age} <br/>
       occupation: ${occupation} <br/>
       <span class="salaryList"> ${salary} </span>
      </p>
      </li>`;
        })
        .join('');
};


const userSalary = document.querySelector(".salaryList");
console.log(userSalary);

const show = () => {
    refs.insertAdjacentHTML('beforebegin', userMarkup(workers));
}
show();