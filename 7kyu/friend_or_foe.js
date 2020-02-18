// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! 
// Otherwise, you can be sure he's not...

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

const friend = friends => friends.filter(n => n.length == 4)
