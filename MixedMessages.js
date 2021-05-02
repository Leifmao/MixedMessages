//need to rescope with 3 arrays that merge into one
const message1 = ["I'm the","I'll have","This..","I like","I have come here","Coffee's for","King Kong","Show me","Ever notice how","I dare you,","60% Of The Time,","If You're Good At Something,","Yippee-ki-yay,","I Love The Smell Of","Say Hello To","May The Force Be","I'm Gonna Make Him An Offer","You Talkin'","Get Busy Living, Or","Frankly My Dear,"];
const message2 = ["king of the world","what she's having","is.. Sparta","the way you die boy","to chew bubblegum and kick ass…and I'm all out of bubblegum","closers only","ain't got shit on me","the money","you come across somebody once in a while you shouldn't have fucked with? That's me","I double dare you motherfucker","It Works Everytime","Never Do It For Free","Motherfucker","Napalm In The Morning","My Little Friend","With You","He Can't Refuse","To Me?","Get Busy Dying","I Don't Give A Damn"];
const message3 = ["- Titanic (1997)","- When Harry Met Sally (1989)","- 300 (2006)","- Django Unchained (2012)","- They Live (1988)","- Glengarry Glen Ross (1992)","- Training Day (2001)","- Jerry Maguire (1996)","– Gran Torino (2008)","- Pulp Fiction (1994)","– Anchorman: The Legend Of Ron Burgundy (2004)","– The Dark Knight (2008)","– Die Hard (1988)","– Apocalypse Now (1979)","– Scarface (1983)","– Star Wars (1977)","– The Godfather (1972)","– Taxi Driver (1976)","– The Shawshank Redemption (1994)","– Gone With The Wind (1939)"]
const createMixedMessage = () => {
    let randomMessage1 = message1[Math.floor(Math.random()*message1.length)];
    let randomMessage2 = message2[Math.floor(Math.random()*message2.length)];
    let randomMessage3 = message3[Math.floor(Math.random()*message3.length)];
    let joinMessage = randomMessage1+' '+randomMessage2+' '+randomMessage3;
    return joinMessage;
}
console.log(createMixedMessage());