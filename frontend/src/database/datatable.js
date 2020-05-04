import users from './datatable/users'
import armors from './datatable/armors'
import bracelets from './datatable/bracelets'
import heroes from './datatable/heroes'
import lockets from './datatable/lockets'
import pets from './datatable/pets'
import rings from './datatable/rings'
import talents from './datatable/talents'
import upgradeRequirements from './datatable/upgradeRequirements'
import weapons from './datatable/weapons'


export default {
  state: () => ({
    users,
    armors,
    bracelets,
    heroes,
    lockets,
    pets,
    rings,
    talents,
    upgradeRequirements,
    weapons,
  })
}