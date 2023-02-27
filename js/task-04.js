const workers = [
    { name: 'Vasya', sName: 'Matsevko', age: 40, occupation: 'director' },
    { name: 'Kesha', sName: 'Fedorov', age: 24, occupation: 'manager' },
    { name: 'Randy', sName: 'Litin', age: 21, occupation: 'programmer' },
];

const addSalary = (worker) => {
    switch (worker.occupation) {
        case 'director':
            worker.salary = 9000;
            break;
        case 'manager':
            worker.salary = 1500;
            break;
        case 'programmer':
            worker.salary = 10000;
            break;
        default:
            worker.salary = 1000;
    }
};

workers.forEach(addSalary); 

const refs = document.querySelector(".workersList");

const userMarkup = workers => {
    return workers
        .map(({ name, sName, age, occupation, salary }) => {
            return `<li class="li-item">
        <h3>${name}</h3>
        <p> 
          Second Name: ${sName} <br/>
          age: ${age} <br/>
          occupation: ${occupation} <br/>
          <span class="salaryList"> salary: ${salary} </span>
        </p>
      </li>`;
        })
        .join('');
};

const show = () => {
    refs.insertAdjacentHTML('beforebegin', userMarkup(workers));
}

show(); 
