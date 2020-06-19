export interface Bet {
    userId?: String,
    matchId: String,
    team1: String,
    team2: String,
    prop: String,
    amount: Number,
    odds: Number,
    result?: String
}