import vine from '@vinejs/vine'

export const addItemsValidator = vine.compile(
  vine.object({
    itemNames: vine.array(vine.string()),
  })
)

export const getItemsValidator = vine.compile(
  vine.object({
    limit: vine.number().withoutDecimals().min(0).max(1000),
    page: vine.number().withoutDecimals().min(0).max(10_000),
  })
)
