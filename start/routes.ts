/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const PreparationController = () => import('#controllers/preparation_controller')
const ScoreBoardController = () => import('#controllers/score_board_controller')
const ExploreAdventureController = () => import('#controllers/explore_adventure_controller')
const InscriptionController = () => import('#controllers/inscription_controller')
const InstallController = () => import('#controllers/install_controller')
const UninstallController = () => import('#controllers/uninstall_controller')

router.post('/install', [InstallController]).use(middleware.adminGuard())
router.post('/uninstall', [UninstallController]).use(middleware.adminGuard())

router.post('/inscription', [InscriptionController])

router.post('/exploration/adventures/:name', [ExploreAdventureController]).use(
  middleware.auth({
    guards: ['basic'],
  })
)

router
  .group(() => {
    router.get('/adventures', [PreparationController, 'getAdventures'])
    router.get('/items', [PreparationController, 'getItems'])

    router
      .group(() => {
        router.post('/backpack', [PreparationController, 'addItems'])
        router.get('/backpack', [PreparationController, 'openBackpack'])
      })
      .use(
        middleware.auth({
          guards: ['basic'],
        })
      )

    router.get('/', [PreparationController, 'index'])
  })
  .prefix('/preparation')

router.get('/score-board', [ScoreBoardController])

router.get('/admin', ({ view }) => view.render('admin'))
router.get('/', ({ view }) => view.render('index'))
