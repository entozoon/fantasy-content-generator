const Races = require('./races');
const Utils = require('./utils');

const generate = (props = {}) => {
    const characterTraitsJson = require('./characterTraits.json');
    const flawsJson = require('./flaws.json');

    const race = props.race ? props.race : Utils.pick(['orc', 'gnome', 'dwarf', 'elf', 'human'])
    const name = Races[race]();

    const traits = [];
    const flaws = [];

    Utils.forCount(Utils.rand(1, 3), () => {
        traits.push(Utils.parseStringWithPlaceholders(Utils.pick(characterTraitsJson)));
    });

    Utils.forCount(Utils.rand(1, 2), () => {
        flaws.push(Utils.parseStringWithPlaceholders(Utils.pick(flawsJson)));
    });

    return {
        name,
        race,
        traits,
        flaws
    }
}

const functions = {
    generate
}

module.exports = functions