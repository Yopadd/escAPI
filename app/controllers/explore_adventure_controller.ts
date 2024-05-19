import { game } from '#app/core/game'
import type { HttpContext } from '@adonisjs/core/http'

export default class ExploreAdventureController {
  async handle({ auth, request }: HttpContext) {
    const playerName = auth.user!.name

    const exploreResult = await game.exploreAdventure({
      adventureName: request.param('name'),
      playerName,
      commands: request.hasBody() ? request.body() : undefined,
    })

    return { score: exploreResult.score, report: exploreResult.comment }
  }
}
