export const POSTS_RESUBSCRIBE_INTERVAL = 24 * 60 * 60e3 // 1 day

export const CHECK_NEW_POSTS_INTERVAL = 5e3 // 5 seconds
export const CHECK_POSTS_INTERVAL = 15e3 // 15 seconds

export const CLUB_LINK = 'https://www.chess.com/club/custom-variants'

export const CHECK_POSTS_DURATION: [number, moment.unitOfTime.DurationConstructor] = [15, 'day']
export const CHECK_POSTS_LIMIT = 15

export const POSTS_LIMIT = 2
export const POSTS_LIMIT_MESSAGE = 'Players may post at most 2 positions per week.'
export const POSTS_LIMIT_DURATION: [number, moment.unitOfTime.DurationConstructor] = [1, 'week']

export const TIME_RUN_OUT_MESSAGE = 'Time for fixing has run out.'
export const FIXING_DURATION: [number, moment.unitOfTime.DurationConstructor] = [2, 'week']

export const NO_GAMES_MESSAGE = 'Requirements not met.'

export const MIN_SIMILARITY = 0.75
export const MIN_FINAL_GAMES = 5
export const MIN_PLAYERS = 8
export const MIN_GAMES = 10
export const MIN_TIMESPAN = 24 * 60 * 60e3

export const SKIP_COMMAND = '/cgabot-skip'
