import Item from '#app/core/install/item/item'

export const Items = {
  get Sword() {
    return new Item({
      name: 'Épée',
      description: 'Un simple bout de métal un peu tranchant',
      tags: ['weapon', 'sword', 'metal', 'iron'],
    })
  },

  get WaterBottle() {
    return new Item({
      name: "Gourde d'eau",
      description: 'Utile pour se désaltérer',
      tags: ['water', 'potion', 'hydration'],
    })
  },

  get FirePotion() {
    return new Item({
      name: 'Potion de résistance au feu',
      description: 'Protège contre les brûlures',
      tags: ['potion', 'fire resistance'],
    })
  },

  get Coat() {
    return new Item({
      name: 'Manteau',
      description: 'Garde au chaud',
      tags: ['armor', 'cold resistance'],
    })
  },

  get LittleBagOfGoldenPiece() {
    return new Item({
      name: "Sac de pièce d'or",
      description: 'Un peu de monnaies',
      tags: ['money'],
    })
  },

  get Rubies() {
    return new Item({
      name: 'Rubis',
      description: 'Certains aiment les choses qui brillent',
      tags: ['money'],
    })
  },

  get Capsules() {
    return new Item({
      name: 'Capsules',
      description: "Elles proviennent probablement d'une collection",
      tags: ['money'],
    })
  },

  get Dagger() {
    return new Item({
      name: 'Dague',
      description: 'Un grand couteau',
      tags: ['weapon'],
    })
  },

  get WoodStick() {
    return new Item({
      name: 'Bâton',
      description:
        'Un simple bout de bois, ça peut être utile pour la marche et même peut-être pour se défendre',
      tags: ['weapon', 'wood'],
    })
  },

  get Torch() {
    return new Item({
      name: 'Torche',
      description:
        "Utile à la tomber de la nuit ou pour visiter une veille demeure plongée dans l'obscurité",
      tags: ['wood', 'light', 'fire'],
    })
  },

  get WoodShield() {
    return new Item({
      name: 'Bouclier en bois',
      description: 'Une simple planche de bois, mais souvent très utile',
      tags: ['armor', 'wood'],
    })
  },

  get IronShield() {
    return new Item({
      name: 'Bouclier en fer',
      description: 'Une plaque de fer avec une poignée',
      tags: ['armor', 'iron', 'metal'],
    })
  },

  get Rope() {
    return new Item({
      name: 'Corde',
      description: "C'est toujours utile",
      tags: ['climbing'],
    })
  },

  get GrapplingHook() {
    return new Item({
      name: 'Grappin',
      description: 'Si le chemin devient difficile',
      tags: ['climbing', 'metal'],
    })
  },

  get VialFilledWithFirefly() {
    return new Item({
      name: 'Fiole remplie de luciole',
      description: "C'est une source de lumière presque infini je m'en occupe bien",
      tags: ['light', 'potion', 'insect'],
    })
  },

  get Bread() {
    return new Item({
      name: 'Baguette de pain',
      description: 'Une bonne baguette pour de bons sandwichs',
      tags: ['food'],
    })
  },

  get DriedMeat() {
    return new Item({
      name: 'Viandes séchées',
      description: "Ce conserve bien et c'est plutôt bon",
      tags: ['food', 'meat'],
    })
  },

  get Mushrooms() {
    return new Item({
      name: 'Champignon',
      description: 'Pour une bonne salade',
      tags: ['food', 'vegetal'],
    })
  },

  get Cheese() {
    return new Item({
      name: 'Fromage',
      description: "L'indispensable du casse-croûte",
      tags: ['food'],
    })
  },

  get HoodedCape() {
    return new Item({
      name: 'Cape à capuche',
      description: "Si je veux rester dans l'ombre",
      tags: ['stealth'],
    })
  },

  /**
   * HIDDEN ITEMS
   */
  get GoldNuggets() {
    return new Item({
      name: "Pépites d'or",
      description: '',
      tags: ['money', 'money', 'money', 'money', 'money'],
      hidden: true,
    })
  },
}
