// variables
let proverbs = [];
// pushes quotes into the array
proverbs.push("A bird does not sing because it has an answer. It sings because it has a song.", "A bit of fragrance clings to the hand that gives flowers.", "A book holds a house of gold.", "A book is like a garden carried in the pocket.", "A book tightly shut is but a block of paper.", "A child's life is like a piece of paper on which every person leaves a mark.", "A diamond with a flaw is worth more than a pebble without imperfections.", "A filthy mouth will not utter decent language.", "A fool judges people by the presents they give him.", "A gem is not polished without rubbing, nor a man perfected without trials.", "A nation's treasure is in its scholars.", "A rat who gnaws at a cat's tail invites destruction.",
            "Be not afraid of growing slowly, be afraid only of standing still.", "Be the first to the field and the last to the couch.", "Deep doubts, deep wisdom; small doubts, little wisdom.", "Dig the well before you are thirsty.", "Do good, reap good; do evil, reap evil.", "Do not employ handsome servants.", "Do not fear going forward slowly; fear only to stand still.", "Do not remove a fly from your friend's forehead with a hatchet.")
// creates function to return random chinese quotes
const getProverbs = () => {
    let randomProverbs = Math.floor(Math.random() * proverbs.length);
    switch(randomProverbs){
        case 0:
            return proverbs[0];
        case 1:
            return proverbs[1];
        case 2:
            return proverbs[2];
        case 3:
            return proverbs[3];
        case 4:
            return proverbs[4];
        case 5:
            return proverbs[5];
        case 6:
            return proverbs[6];
        case 7:
            return proverbs[7];
        case 8:
            return proverbs[8];
        case 9:
            return proverbs[9];
        case 10:
            return proverbs[10];
        case 11:
            return proverbs[11];
        case 12:
            return proverbs[12];
        case 13:
            return proverbs[13];
        case 14:
            return proverbs[14];
        case 15:
            return proverbs[15];
        case 16:
            return proverbs[16];
        case 17:
            return proverbs[17];
        case 18:
            return proverbs[18];
        case 19:
            return proverbs[19];
    }
}

console.log(getProverbs());


