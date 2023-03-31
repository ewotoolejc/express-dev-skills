const skills = [
{id: 101, skill: 'HTML', working: true},
{id: 102, skill: 'CSS', working: true},
{id: 103, skill: 'JS', working: true},
{id: 104, skill: 'GitHub', working: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function create(sk) {
    sk.id = Date.now() % 1000000;
    sk.working = true; 
    skills.push(sk);
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}