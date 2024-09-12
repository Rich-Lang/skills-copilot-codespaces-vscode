function skillsMember() {
    var skills = [
        { name: 'HTML', level: 5 },
        { name: 'CSS', level: 5 },
        { name: 'JavaScript', level: 4 },
        { name: 'React', level: 3 }
    ];

    return {
        getSkills: function () {
            return skills;
        }
    };
}