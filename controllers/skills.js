const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    add,
    create,
    delete: deleteSkill,
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: '#AllTheDevSkills',
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'This Skill',
    });
};

function add(req, res) {
    res.render('skills/add', {title: 'New Skill'});
};

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
};