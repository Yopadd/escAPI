import { game, repositories } from '#app/core/game'
import Adventure from '#app/core/install/adventure/adventure'
import { Events } from '#app/core/install/event/events'
import { Items } from '#app/core/install/item/items'
import db from '@adonisjs/lucid/services/db'
import sinon from 'sinon'

function install() {
  return db.transaction(async (trx) => {
    await repositories.install.adventureRepository.createMany(
      [
        new Adventure('Aazzidy', [
          Events.Collector(),
          Events.Thief(),
          Events.Wolfs(2),
          Events.FireCamp(),
          Events.CrossingLavaRiver(),
          Events.Dragon(),
        ]),
      ],
      trx
    )
    await repositories.install.itemRepository.createMany(Object.values(Items), trx)
  })
}

export function testInstaller() {
  sinon.replace(game, 'install', install)
}
