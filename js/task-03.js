const workers = [
  { name: 'Vasya', sName: 'Matsevko', age: 40, occupation: 'director', salary: '' },
  { name: 'Kesha', sName: 'Fedorov', age: 24, occupation: 'manager', salary: '' },
  { name: 'Randy', sName: 'Litin', age: 21, occupation: 'programmer', salary: '' },
];

const refs = document.querySelector(".workersList");
const userMarkup = workers => {
  return workers
    .map(({name, sName, age, occupation }) => {
      return `<li class="li-item">
      <h3>${name}</h3>
    <p> 
      Second Name: ${sName} <br/>
       age: ${age} <br/>
       occupation: ${occupation} <br/>
      </p>
      </li>`;
    })
    .join('');
};


const show = () => {
  refs.insertAdjacentHTML('beforebegin', userMarkup(workers));
}
show();