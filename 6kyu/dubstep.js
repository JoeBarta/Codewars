// example 

// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND

const songDecoder = song => song.replace(/(WUB)+/gi, ' ').trim()