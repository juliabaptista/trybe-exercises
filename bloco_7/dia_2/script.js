const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;

console.log(customer);

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); 

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};
  
const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

// Object.keys
const listSkills = (student) => {
const arrayOfSkills = Object.keys(student);
for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
};
  
console.log('Estudante 1');
listSkills(student1);
  
console.log('Estudante 2');
listSkills(student2);

// Object.values
const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

// sem Object.values
const listSkillsWithFor = (student) => {
    const skills = [];
    for(skill in student) {
        skills.push(student[skill]);
    }
  
    return skills;
};
console.log(listSkillsWithFor(student));

// com Object.values
const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const listSkillsWithValues = (student) => Object.values(student);
console.log(listSkillsWithValues(student));

// Object.entries
const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
for(index in pairKeyValue) {
    console.log('--------');
    console.log('Pais:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
};

// Object.entries
const person = {
    name:'Roberto',
};
  
  const lastName = {
    lastName: 'Silva',
};
  
const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);


