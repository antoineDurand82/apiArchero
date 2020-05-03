import Users from './datatable/users'
import Armors from './datatable/armors'
import Bracelets from './datatable/bracelets'
import Heroes from './datatable/heroes'
import Lockets from './datatable/lockets'
import Pets from './datatable/pets'
import Rings from './datatable/rings'
import Talents from './datatable/talents'
import UpgradeRequirements from './datatable/upgradeRequirements'
import Weapons from './datatable/weapons'


export default {
  state: () => ({
    users: Users,
    armors: Armors,
    bracelets: Bracelets,
    heroes: Heroes,
    lockets: Lockets,
    pets: Pets,
    rings: Rings,
    talents: Talents,
    upgradeRequirements: UpgradeRequirements,
    weapons: Weapons,
  })
}