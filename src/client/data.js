// Products
const cushion34 = {
    name: "Cushion 34",
    description:
        "A 34x19 construction provides improved flexibility and an approximate natural loop to rope ratio of 45-1. Multi-strand spin resistance and plastic enhancement allow for smooth in-service operation, significantly reduced rope torque and stretch, and less movement in the shaft whenthe rope is at full speed. Full plastic impregnation improves spin-resistance and eliminates internal cross cutting of the strands which is common to other multi-strand products, thereby extending service life and improving security. Galvanised wire and WRI's patented one-step impregnationand jacketing process, which provides a thick protectiveouter layer of plastic, prevents contaminants fromcorroding the rope and eliminates the need for costly in-field lubrication.",
};

const cpx = {
    name: "CPX",
    description:
        "Extreme 8 strand construction with nylon jacket for shovels and dragline ropes",
};

const tigerBlue8 = {
    name: "Tiger Blue 8",
    description:
        "The Tiger Blue 8 is a Bridon brand 8 strand plastic impregnated design.",
};

const cushionPacUltra = {
    name: "Cushion pac Ultra",
    description:
        "WRI Brand Advanced Plastic coated, 8 compacted strand construction.",
};

// Product Classes
const cBalanceRopes = {
    name: "Balance Ropes",
    description:
        "Balance ropes or also referred as tail ropes, compensate the weight of the hoisting ropes in a Friction Koepe setup. To lower the power requirement to move material to the surface in the vertical shaft but mainly to guarantee the weight balance for friction hoisting. Round balance ropes – flexible multi-strand ropes specifically weighted to counter balance conveyances Flat Balance Ropes – Very flexible flat stranded rope used in shafts that have limited rope hang space. Specifically manufactured based on weight to counter balance the system.",
    products: [cushion34],
};

const cHoistRope = {
    name: "Hoist Rope",
    description:
        "The hoist ropes for shovel machines have a plastic coating in order to prevent drum wear and retain the lubrication. The combination of flexibility, strength and superior core support allows multiple bending cycles to be achieved for safe and efficient mining operation.",
    products: [cpx, cushionPacUltra],
};

// Items
const iFrictionWinders = {
    name: "Friction Winders",
    description:
        "Vertical shaft hoisting method for depths from 500m up to 2000m with a weight balanced rope system.",
    productClasses: [cBalanceRopes],
};

const iShoverMachine = {
    name: "Shover Machine",
    description:
        "Optimum design rope diameter and construction for working on all machines by offering the best combination of characteristics to provide exceptional service life.",
    productClasses: [cHoistRope],
};

// Branches
const bUndergroundMining = {
    name: "Underground Mining",
    description:
        "Each mine in the world is unique, starting with the mineral being mined and ending with the final hoisting of these minerals to the surface. The shaft hoisting is taking a key role in the underground mining processes. Each mine is hoisting minerals from different depths, and different loads each under unique shaft conditions.",
    items: [iFrictionWinders],
};

const bSurfaceMining = {
    name: "Surface Mining",
    description:
        "Today’s miners operate globally in harsh environments and face increasingly difficult challenges.  Bridon-Bekaert’s full line of shovel and dragline ropes provide safe and proven technology that will outperform any rope in service life or cost per ton in severe applications.  You will find the WRI and Bridon brand products operating anywhere that there is extensive surface mining activity. Miners operating electric mining shovels in the Copper mines of Chile, the Canadian oil sands, and the Arizona Copper mines trust the WRI and Bridon Brand hoist ropes to safely deliver unequalled performance.  Every day draglines operators in the Powder River Basin in the United States or the Australian coal mines rely on the WRI and Bridon brand Hoist and Drag ropes for safe, dependable service life. ",
    items: [iShoverMachine],
};

// Sectors
const sMining = {
    sector: "Mining",
    desctiption:
        "Bridon-Bekaert’s mining ropes are designed to achieve longer service life and the lowest cost per ton, and are engineered to withstand abrasion, bend fatigue, internal corrosion, and extreme temperatures.\n In surface mining, we understand that profit depends on productivity. We test every product to destruction, so we know our ropes will perform as promised in the most severe field applications. Our industry-leading team of rope engineers span the world to ensure our customers receive maximum uptime and value.",
    branches: [bUndergroundMining, bSurfaceMining],
};

const productsData = [sMining];
