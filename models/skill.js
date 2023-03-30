const skills = [
{id: 101, skill: 'HTML', working: true},
{id: 102, skill: 'CSS', working: true},
{id: 103, skill: 'JS', working: true},
{id: 104, skill: 'GitHub', working: true}
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
  };

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};