const messages = [
    "Price is what you pay. Value is what you get.",
    "Risk comes from not knowing what you are doing.",
    "In the business world, the rearview mirror is always clearer than the windshield.",
    "It’s far better to buy a wonderful company at a fair price, than a fair company at a wonderful price.",
    "If a business does well, the stock eventually follows.",
    "Only buy something that you’d be perfectly happy to hold if the market shut down for 10 years.",
    "Calling someone who trades actively in the market an investor is like calling someone who repeatedly engages in one-night stands a romantic.",
    "The stock market is designed to transfer money from the active to the patient.",
    "If you aren’t thinking about owning a stock for 10 years, don’t even think about owning it for 10 minutes.",
    "An investor should act as though he had a lifetime decision card with just twenty punches on it.",
    "Time is the friend of the wonderful company, the enemy of the mediocre.",
    "Why not invest your assets in the companies you really like? As Mae West said, ‘Too much of a good thing can be wonderful.'",
    "The business schools reward difficult complex behavior more than simple behavior, but simple behavior is more effective."
];

const randomNumGenerator = (number) => {
    let randNum = Math.floor(Math.random() * number);
    return randNum;
};

const randomMessage = (arr) => {
    const num = randomNumGenerator(5)
    if(num <= messages.length){
        console.log(arr[num])
    } else {
        console.log("Oops, out of Index.")
    }
};

randomMessage(messages);