interface Knife {
  cut();
}

interface BottleOpener {
  openBottle();
}

interface Screwdriver {
  turnScrew();
}

type SwissArmyKnife = Knife & BottleOpener & Screwdriver;

function use(tool: SwissArmyKnife) {
  console.log('I can do anything');

  tool.cut();
  tool.openBottle();
  tool.turnScrew();
}
