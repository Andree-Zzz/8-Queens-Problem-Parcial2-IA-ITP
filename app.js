const tableroBase1 = [
    [
        { col: '1', row: '8', queen: 0},
        { col: '1', row: '7', queen: 0},
        { col: '1', row: '6', queen: 0},
        { col: '1', row: '5', queen: 0},
        { col: '1', row: '4', queen: 0},
        { col: '1', row: '3', queen: 0},
        { col: '1', row: '2', queen: 0},
        { col: '1', row: '1', queen: 0},
    ],
    [
        { col: '2', row: '8', queen: 0},
        { col: '2', row: '7', queen: 0},
        { col: '2', row: '6', queen: 0},
        { col: '2', row: '5', queen: 0},
        { col: '2', row: '4', queen: 0},
        { col: '2', row: '3', queen: 0},
        { col: '2', row: '2', queen: 0},
        { col: '2', row: '1', queen: 0},
    ],
    [
        { col: '3', row: '8', queen: 0},
        { col: '3', row: '7', queen: 0},
        { col: '3', row: '6', queen: 0},
        { col: '3', row: '5', queen: 0},
        { col: '3', row: '4', queen: 0},
        { col: '3', row: '3', queen: 0},
        { col: '3', row: '2', queen: 0},
        { col: '3', row: '1', queen: 0},
    ],
    [
        { col: '4', row: '8', queen: 0},
        { col: '4', row: '7', queen: 0},
        { col: '4', row: '6', queen: 0},
        { col: '4', row: '5', queen: 0},
        { col: '4', row: '4', queen: 0},
        { col: '4', row: '3', queen: 0},
        { col: '4', row: '2', queen: 0},
        { col: '4', row: '1', queen: 0},
    ],
    [
        { col: '5', row: '8', queen: 0},
        { col: '5', row: '7', queen: 0},
        { col: '5', row: '6', queen: 0},
        { col: '5', row: '5', queen: 0},
        { col: '5', row: '4', queen: 0},
        { col: '5', row: '3', queen: 0},
        { col: '5', row: '2', queen: 0},
        { col: '5', row: '1', queen: 0},
    ],
    [
        { col: '6', row: '8', queen: 0},
        { col: '6', row: '7', queen: 0},
        { col: '6', row: '6', queen: 0},
        { col: '6', row: '5', queen: 0},
        { col: '6', row: '4', queen: 0},
        { col: '6', row: '3', queen: 0},
        { col: '6', row: '2', queen: 0},
        { col: '6', row: '1', queen: 0},
    ],
    [
        { col: '7', row: '8', queen: 0},
        { col: '7', row: '7', queen: 0},
        { col: '7', row: '6', queen: 0},
        { col: '7', row: '5', queen: 0},
        { col: '7', row: '4', queen: 0},
        { col: '7', row: '3', queen: 0},
        { col: '7', row: '2', queen: 0},
        { col: '7', row: '1', queen: 0},
    ],
    [
        { col: '8', row: '8', queen: 0},
        { col: '8', row: '7', queen: 0},
        { col: '8', row: '6', queen: 0},
        { col: '8', row: '5', queen: 0},
        { col: '8', row: '4', queen: 0},
        { col: '8', row: '3', queen: 0},
        { col: '8', row: '2', queen: 0},
        { col: '8', row: '1', queen: 0},
    ],
];
const tableroBase2 = [
    [
        { col: '1', row: '8', queen: 0},
        { col: '1', row: '7', queen: 0},
        { col: '1', row: '6', queen: 0},
        { col: '1', row: '5', queen: 0},
        { col: '1', row: '4', queen: 0},
        { col: '1', row: '3', queen: 0},
        { col: '1', row: '2', queen: 0},
        { col: '1', row: '1', queen: 0},
    ],
    [
        { col: '2', row: '8', queen: 0},
        { col: '2', row: '7', queen: 0},
        { col: '2', row: '6', queen: 0},
        { col: '2', row: '5', queen: 0},
        { col: '2', row: '4', queen: 0},
        { col: '2', row: '3', queen: 0},
        { col: '2', row: '2', queen: 0},
        { col: '2', row: '1', queen: 0},
    ],
    [
        { col: '3', row: '8', queen: 0},
        { col: '3', row: '7', queen: 0},
        { col: '3', row: '6', queen: 0},
        { col: '3', row: '5', queen: 0},
        { col: '3', row: '4', queen: 0},
        { col: '3', row: '3', queen: 0},
        { col: '3', row: '2', queen: 0},
        { col: '3', row: '1', queen: 0},
    ],
    [
        { col: '4', row: '8', queen: 0},
        { col: '4', row: '7', queen: 0},
        { col: '4', row: '6', queen: 0},
        { col: '4', row: '5', queen: 0},
        { col: '4', row: '4', queen: 0},
        { col: '4', row: '3', queen: 0},
        { col: '4', row: '2', queen: 0},
        { col: '4', row: '1', queen: 0},
    ],
    [
        { col: '5', row: '8', queen: 0},
        { col: '5', row: '7', queen: 0},
        { col: '5', row: '6', queen: 0},
        { col: '5', row: '5', queen: 0},
        { col: '5', row: '4', queen: 0},
        { col: '5', row: '3', queen: 0},
        { col: '5', row: '2', queen: 0},
        { col: '5', row: '1', queen: 0},
    ],
    [
        { col: '6', row: '8', queen: 0},
        { col: '6', row: '7', queen: 0},
        { col: '6', row: '6', queen: 0},
        { col: '6', row: '5', queen: 0},
        { col: '6', row: '4', queen: 0},
        { col: '6', row: '3', queen: 0},
        { col: '6', row: '2', queen: 0},
        { col: '6', row: '1', queen: 0},
    ],
    [
        { col: '7', row: '8', queen: 0},
        { col: '7', row: '7', queen: 0},
        { col: '7', row: '6', queen: 0},
        { col: '7', row: '5', queen: 0},
        { col: '7', row: '4', queen: 0},
        { col: '7', row: '3', queen: 0},
        { col: '7', row: '2', queen: 0},
        { col: '7', row: '1', queen: 0},
    ],
    [
        { col: '8', row: '8', queen: 0},
        { col: '8', row: '7', queen: 0},
        { col: '8', row: '6', queen: 0},
        { col: '8', row: '5', queen: 0},
        { col: '8', row: '4', queen: 0},
        { col: '8', row: '3', queen: 0},
        { col: '8', row: '2', queen: 0},
        { col: '8', row: '1', queen: 0},
    ],
];
const tableroBase3 = [
    [
        { col: '1', row: '8', queen: 0},
        { col: '1', row: '7', queen: 0},
        { col: '1', row: '6', queen: 0},
        { col: '1', row: '5', queen: 0},
        { col: '1', row: '4', queen: 0},
        { col: '1', row: '3', queen: 0},
        { col: '1', row: '2', queen: 0},
        { col: '1', row: '1', queen: 0},
    ],
    [
        { col: '2', row: '8', queen: 0},
        { col: '2', row: '7', queen: 0},
        { col: '2', row: '6', queen: 0},
        { col: '2', row: '5', queen: 0},
        { col: '2', row: '4', queen: 0},
        { col: '2', row: '3', queen: 0},
        { col: '2', row: '2', queen: 0},
        { col: '2', row: '1', queen: 0},
    ],
    [
        { col: '3', row: '8', queen: 0},
        { col: '3', row: '7', queen: 0},
        { col: '3', row: '6', queen: 0},
        { col: '3', row: '5', queen: 0},
        { col: '3', row: '4', queen: 0},
        { col: '3', row: '3', queen: 0},
        { col: '3', row: '2', queen: 0},
        { col: '3', row: '1', queen: 0},
    ],
    [
        { col: '4', row: '8', queen: 0},
        { col: '4', row: '7', queen: 0},
        { col: '4', row: '6', queen: 0},
        { col: '4', row: '5', queen: 0},
        { col: '4', row: '4', queen: 0},
        { col: '4', row: '3', queen: 0},
        { col: '4', row: '2', queen: 0},
        { col: '4', row: '1', queen: 0},
    ],
    [
        { col: '5', row: '8', queen: 0},
        { col: '5', row: '7', queen: 0},
        { col: '5', row: '6', queen: 0},
        { col: '5', row: '5', queen: 0},
        { col: '5', row: '4', queen: 0},
        { col: '5', row: '3', queen: 0},
        { col: '5', row: '2', queen: 0},
        { col: '5', row: '1', queen: 0},
    ],
    [
        { col: '6', row: '8', queen: 0},
        { col: '6', row: '7', queen: 0},
        { col: '6', row: '6', queen: 0},
        { col: '6', row: '5', queen: 0},
        { col: '6', row: '4', queen: 0},
        { col: '6', row: '3', queen: 0},
        { col: '6', row: '2', queen: 0},
        { col: '6', row: '1', queen: 0},
    ],
    [
        { col: '7', row: '8', queen: 0},
        { col: '7', row: '7', queen: 0},
        { col: '7', row: '6', queen: 0},
        { col: '7', row: '5', queen: 0},
        { col: '7', row: '4', queen: 0},
        { col: '7', row: '3', queen: 0},
        { col: '7', row: '2', queen: 0},
        { col: '7', row: '1', queen: 0},
    ],
    [
        { col: '8', row: '8', queen: 0},
        { col: '8', row: '7', queen: 0},
        { col: '8', row: '6', queen: 0},
        { col: '8', row: '5', queen: 0},
        { col: '8', row: '4', queen: 0},
        { col: '8', row: '3', queen: 0},
        { col: '8', row: '2', queen: 0},
        { col: '8', row: '1', queen: 0},
    ],
];
const tableroHijo1 = [
    [
        { col: '1', row: '8', queen: 0},
        { col: '1', row: '7', queen: 0},
        { col: '1', row: '6', queen: 0},
        { col: '1', row: '5', queen: 0},
        { col: '1', row: '4', queen: 0},
        { col: '1', row: '3', queen: 0},
        { col: '1', row: '2', queen: 0},
        { col: '1', row: '1', queen: 0},
    ],
    [
        { col: '2', row: '8', queen: 0},
        { col: '2', row: '7', queen: 0},
        { col: '2', row: '6', queen: 0},
        { col: '2', row: '5', queen: 0},
        { col: '2', row: '4', queen: 0},
        { col: '2', row: '3', queen: 0},
        { col: '2', row: '2', queen: 0},
        { col: '2', row: '1', queen: 0},
    ],
    [
        { col: '3', row: '8', queen: 0},
        { col: '3', row: '7', queen: 0},
        { col: '3', row: '6', queen: 0},
        { col: '3', row: '5', queen: 0},
        { col: '3', row: '4', queen: 0},
        { col: '3', row: '3', queen: 0},
        { col: '3', row: '2', queen: 0},
        { col: '3', row: '1', queen: 0},
    ],
    [
        { col: '4', row: '8', queen: 0},
        { col: '4', row: '7', queen: 0},
        { col: '4', row: '6', queen: 0},
        { col: '4', row: '5', queen: 0},
        { col: '4', row: '4', queen: 0},
        { col: '4', row: '3', queen: 0},
        { col: '4', row: '2', queen: 0},
        { col: '4', row: '1', queen: 0},
    ],
    [
        { col: '5', row: '8', queen: 0},
        { col: '5', row: '7', queen: 0},
        { col: '5', row: '6', queen: 0},
        { col: '5', row: '5', queen: 0},
        { col: '5', row: '4', queen: 0},
        { col: '5', row: '3', queen: 0},
        { col: '5', row: '2', queen: 0},
        { col: '5', row: '1', queen: 0},
    ],
    [
        { col: '6', row: '8', queen: 0},
        { col: '6', row: '7', queen: 0},
        { col: '6', row: '6', queen: 0},
        { col: '6', row: '5', queen: 0},
        { col: '6', row: '4', queen: 0},
        { col: '6', row: '3', queen: 0},
        { col: '6', row: '2', queen: 0},
        { col: '6', row: '1', queen: 0},
    ],
    [
        { col: '7', row: '8', queen: 0},
        { col: '7', row: '7', queen: 0},
        { col: '7', row: '6', queen: 0},
        { col: '7', row: '5', queen: 0},
        { col: '7', row: '4', queen: 0},
        { col: '7', row: '3', queen: 0},
        { col: '7', row: '2', queen: 0},
        { col: '7', row: '1', queen: 0},
    ],
    [
        { col: '8', row: '8', queen: 0},
        { col: '8', row: '7', queen: 0},
        { col: '8', row: '6', queen: 0},
        { col: '8', row: '5', queen: 0},
        { col: '8', row: '4', queen: 0},
        { col: '8', row: '3', queen: 0},
        { col: '8', row: '2', queen: 0},
        { col: '8', row: '1', queen: 0},
    ],
];
const tableroHijo2 = [
    [
        { col: '1', row: '8', queen: 0},
        { col: '1', row: '7', queen: 0},
        { col: '1', row: '6', queen: 0},
        { col: '1', row: '5', queen: 0},
        { col: '1', row: '4', queen: 0},
        { col: '1', row: '3', queen: 0},
        { col: '1', row: '2', queen: 0},
        { col: '1', row: '1', queen: 0},
    ],
    [
        { col: '2', row: '8', queen: 0},
        { col: '2', row: '7', queen: 0},
        { col: '2', row: '6', queen: 0},
        { col: '2', row: '5', queen: 0},
        { col: '2', row: '4', queen: 0},
        { col: '2', row: '3', queen: 0},
        { col: '2', row: '2', queen: 0},
        { col: '2', row: '1', queen: 0},
    ],
    [
        { col: '3', row: '8', queen: 0},
        { col: '3', row: '7', queen: 0},
        { col: '3', row: '6', queen: 0},
        { col: '3', row: '5', queen: 0},
        { col: '3', row: '4', queen: 0},
        { col: '3', row: '3', queen: 0},
        { col: '3', row: '2', queen: 0},
        { col: '3', row: '1', queen: 0},
    ],
    [
        { col: '4', row: '8', queen: 0},
        { col: '4', row: '7', queen: 0},
        { col: '4', row: '6', queen: 0},
        { col: '4', row: '5', queen: 0},
        { col: '4', row: '4', queen: 0},
        { col: '4', row: '3', queen: 0},
        { col: '4', row: '2', queen: 0},
        { col: '4', row: '1', queen: 0},
    ],
    [
        { col: '5', row: '8', queen: 0},
        { col: '5', row: '7', queen: 0},
        { col: '5', row: '6', queen: 0},
        { col: '5', row: '5', queen: 0},
        { col: '5', row: '4', queen: 0},
        { col: '5', row: '3', queen: 0},
        { col: '5', row: '2', queen: 0},
        { col: '5', row: '1', queen: 0},
    ],
    [
        { col: '6', row: '8', queen: 0},
        { col: '6', row: '7', queen: 0},
        { col: '6', row: '6', queen: 0},
        { col: '6', row: '5', queen: 0},
        { col: '6', row: '4', queen: 0},
        { col: '6', row: '3', queen: 0},
        { col: '6', row: '2', queen: 0},
        { col: '6', row: '1', queen: 0},
    ],
    [
        { col: '7', row: '8', queen: 0},
        { col: '7', row: '7', queen: 0},
        { col: '7', row: '6', queen: 0},
        { col: '7', row: '5', queen: 0},
        { col: '7', row: '4', queen: 0},
        { col: '7', row: '3', queen: 0},
        { col: '7', row: '2', queen: 0},
        { col: '7', row: '1', queen: 0},
    ],
    [
        { col: '8', row: '8', queen: 0},
        { col: '8', row: '7', queen: 0},
        { col: '8', row: '6', queen: 0},
        { col: '8', row: '5', queen: 0},
        { col: '8', row: '4', queen: 0},
        { col: '8', row: '3', queen: 0},
        { col: '8', row: '2', queen: 0},
        { col: '8', row: '1', queen: 0},
    ],
];
const tableroMutacion1 = [
    [
        { col: '1', row: '8', queen: 0},
        { col: '1', row: '7', queen: 0},
        { col: '1', row: '6', queen: 0},
        { col: '1', row: '5', queen: 0},
        { col: '1', row: '4', queen: 0},
        { col: '1', row: '3', queen: 0},
        { col: '1', row: '2', queen: 0},
        { col: '1', row: '1', queen: 0},
    ],
    [
        { col: '2', row: '8', queen: 0},
        { col: '2', row: '7', queen: 0},
        { col: '2', row: '6', queen: 0},
        { col: '2', row: '5', queen: 0},
        { col: '2', row: '4', queen: 0},
        { col: '2', row: '3', queen: 0},
        { col: '2', row: '2', queen: 0},
        { col: '2', row: '1', queen: 0},
    ],
    [
        { col: '3', row: '8', queen: 0},
        { col: '3', row: '7', queen: 0},
        { col: '3', row: '6', queen: 0},
        { col: '3', row: '5', queen: 0},
        { col: '3', row: '4', queen: 0},
        { col: '3', row: '3', queen: 0},
        { col: '3', row: '2', queen: 0},
        { col: '3', row: '1', queen: 0},
    ],
    [
        { col: '4', row: '8', queen: 0},
        { col: '4', row: '7', queen: 0},
        { col: '4', row: '6', queen: 0},
        { col: '4', row: '5', queen: 0},
        { col: '4', row: '4', queen: 0},
        { col: '4', row: '3', queen: 0},
        { col: '4', row: '2', queen: 0},
        { col: '4', row: '1', queen: 0},
    ],
    [
        { col: '5', row: '8', queen: 0},
        { col: '5', row: '7', queen: 0},
        { col: '5', row: '6', queen: 0},
        { col: '5', row: '5', queen: 0},
        { col: '5', row: '4', queen: 0},
        { col: '5', row: '3', queen: 0},
        { col: '5', row: '2', queen: 0},
        { col: '5', row: '1', queen: 0},
    ],
    [
        { col: '6', row: '8', queen: 0},
        { col: '6', row: '7', queen: 0},
        { col: '6', row: '6', queen: 0},
        { col: '6', row: '5', queen: 0},
        { col: '6', row: '4', queen: 0},
        { col: '6', row: '3', queen: 0},
        { col: '6', row: '2', queen: 0},
        { col: '6', row: '1', queen: 0},
    ],
    [
        { col: '7', row: '8', queen: 0},
        { col: '7', row: '7', queen: 0},
        { col: '7', row: '6', queen: 0},
        { col: '7', row: '5', queen: 0},
        { col: '7', row: '4', queen: 0},
        { col: '7', row: '3', queen: 0},
        { col: '7', row: '2', queen: 0},
        { col: '7', row: '1', queen: 0},
    ],
    [
        { col: '8', row: '8', queen: 0},
        { col: '8', row: '7', queen: 0},
        { col: '8', row: '6', queen: 0},
        { col: '8', row: '5', queen: 0},
        { col: '8', row: '4', queen: 0},
        { col: '8', row: '3', queen: 0},
        { col: '8', row: '2', queen: 0},
        { col: '8', row: '1', queen: 0},
    ],
];
const tableroMutacion2 = [
    [
        { col: '1', row: '8', queen: 0},
        { col: '1', row: '7', queen: 0},
        { col: '1', row: '6', queen: 0},
        { col: '1', row: '5', queen: 0},
        { col: '1', row: '4', queen: 0},
        { col: '1', row: '3', queen: 0},
        { col: '1', row: '2', queen: 0},
        { col: '1', row: '1', queen: 0},
    ],
    [
        { col: '2', row: '8', queen: 0},
        { col: '2', row: '7', queen: 0},
        { col: '2', row: '6', queen: 0},
        { col: '2', row: '5', queen: 0},
        { col: '2', row: '4', queen: 0},
        { col: '2', row: '3', queen: 0},
        { col: '2', row: '2', queen: 0},
        { col: '2', row: '1', queen: 0},
    ],
    [
        { col: '3', row: '8', queen: 0},
        { col: '3', row: '7', queen: 0},
        { col: '3', row: '6', queen: 0},
        { col: '3', row: '5', queen: 0},
        { col: '3', row: '4', queen: 0},
        { col: '3', row: '3', queen: 0},
        { col: '3', row: '2', queen: 0},
        { col: '3', row: '1', queen: 0},
    ],
    [
        { col: '4', row: '8', queen: 0},
        { col: '4', row: '7', queen: 0},
        { col: '4', row: '6', queen: 0},
        { col: '4', row: '5', queen: 0},
        { col: '4', row: '4', queen: 0},
        { col: '4', row: '3', queen: 0},
        { col: '4', row: '2', queen: 0},
        { col: '4', row: '1', queen: 0},
    ],
    [
        { col: '5', row: '8', queen: 0},
        { col: '5', row: '7', queen: 0},
        { col: '5', row: '6', queen: 0},
        { col: '5', row: '5', queen: 0},
        { col: '5', row: '4', queen: 0},
        { col: '5', row: '3', queen: 0},
        { col: '5', row: '2', queen: 0},
        { col: '5', row: '1', queen: 0},
    ],
    [
        { col: '6', row: '8', queen: 0},
        { col: '6', row: '7', queen: 0},
        { col: '6', row: '6', queen: 0},
        { col: '6', row: '5', queen: 0},
        { col: '6', row: '4', queen: 0},
        { col: '6', row: '3', queen: 0},
        { col: '6', row: '2', queen: 0},
        { col: '6', row: '1', queen: 0},
    ],
    [
        { col: '7', row: '8', queen: 0},
        { col: '7', row: '7', queen: 0},
        { col: '7', row: '6', queen: 0},
        { col: '7', row: '5', queen: 0},
        { col: '7', row: '4', queen: 0},
        { col: '7', row: '3', queen: 0},
        { col: '7', row: '2', queen: 0},
        { col: '7', row: '1', queen: 0},
    ],
    [
        { col: '8', row: '8', queen: 0},
        { col: '8', row: '7', queen: 0},
        { col: '8', row: '6', queen: 0},
        { col: '8', row: '5', queen: 0},
        { col: '8', row: '4', queen: 0},
        { col: '8', row: '3', queen: 0},
        { col: '8', row: '2', queen: 0},
        { col: '8', row: '1', queen: 0},
    ],
];

const app = Vue.createApp({
    data() {
        return {
            message: 'Data',
            tableroBase1,
            tableroBase2,
            tableroBase3,
            parent1: [],
            parent2: [],
            parent3: [],
            fitnes1: 0,
            fitnes2: 0,
            fitnes3: 0,
            porcentaje1: 0,
            porcentaje2: 0,
            porcentaje3: 0,
            selectParent1: [],
            selectParent2: [],
            hijo1: [],
            hijo2: [],
            tableroHijo1,
            tableroHijo2,
            fitnesHijo1: 0,
            fitnesHijo2: 0,
            porcentajeHijo1: 0,
            porcentajeHijo2: 0,
            mutacion1: [],
            mutacion2: [],
            tableroMutacion1,
            tableroMutacion2,
            fitnesMutacion1: 0,
            fitnesMutacion2: 0,
            porcentajeMutacion1: 0,
            porcentajeMutacion2: 0,
            totalSoluciones: 0
        }
    },
    methods: {
        genRandomArrayValues() {
            const values = [];
            for(var i=0;i<8;i++) {
                let x = Math.floor((Math.random() * (8 - 1 + 1)) + 1);
                values.push(x);
            }
            return values;
        },
        limpiarTablero(tablero) {
            for(let i=0;i<8;i++) {
                for(let j=0;j<8;j++) {
                    if (tablero[i][j].queen == 1) {
                        tablero[i][j].queen = 0;
                    }
                }
            }
            return tablero;
        },
        setQueens(posValues, tablero) {
            for(let i=0;i<8;i++) {
                for(let j=0;j<8;j++) {
                    if (tablero[i][j].row == posValues[i]) {
                        tablero[i][j].queen = 1;
                    }
                }
            }
        },
        totalSolutionsNQueens(n) {
            const queens = new Set();
            let count = 0;
            
            return backtrackQueen(0);

            function backtrackQueen(row) {
                for(let col = 0; col<n; col++) {
                    let queen = {row, col};
                    if(isNotUnderAttack(queen)) {
                        queens.add(queen);
                        if( row + 1 === n) count++;
                        else backtrackQueen(row+1);

                        queens.delete(queen);
                    }
                }
                return count;
            }
            function isNotUnderAttack(q) {
                for(let queen of queens) {
                    if(queen.row === q.row) return false;
                    if(queen.col === q.col) return false;
                    if(queen.row - queen.col === q.row - q.col) return false;
                    if(queen.row + queen.col === q.row + q.col) return false;
                }
                return true;
            }
            
        },
        totalAttacksQueen(col,row, tablero) {
            var nRow = 0;
            var nCol = 0;
            var nDiag = 0;
            for(let i=0;i<8;i++) {
                if(tablero[col][i].queen == 1 && i!=row) {
                    nCol++;
                }
                if(tablero[i][row].queen == 1 && col!=i) {
                    nRow++;
                }
                for(let j=0;j<8;j++) {
                    if(i+j == col+row) {
                        if(tablero[j][i].queen == 1 && j!=col) {
                            nDiag++;
                        }
                    }
                    if((i-j+8-1)==(col-row+8-1)) {
                        if(tablero[i][j].queen == 1 && i!=col) {
                            nDiag++;
                        }
                    }
                }
            }
            return nRow+nCol+nDiag;
        },
        totalAttacksTablero(tablero) {
            var fitnes = 0;
            for(let i=0;i<8;i++) {
                for(let j=0;j<8;j++) {
                    if(tablero[j][i].queen == 1) {
                        fitnes += this.totalAttacksQueen(j,i,tablero);
                    }
                }
            }
            return fitnes;
        },
        setSolucions() {
            this.limpiarTablero(this.tableroBase1);
            this.limpiarTablero(this.tableroBase2);
            this.limpiarTablero(this.tableroBase3);

            this.parent1 = [4, 2, 5, 8, 6, 1, 3, 7];
            this.parent2 = [1, 7, 5, 8, 2, 4, 6, 3];
            this.parent3 = [7, 5, 3, 1, 6, 8, 2, 4];

            this.setQueens( this.parent1, this.tableroBase1);
            this.setQueens( this.parent2, this.tableroBase2);
            this.setQueens( this.parent3, this.tableroBase3);

            this.fitnes1 = 28-(this.totalAttacksTablero(this.tableroBase1)/2);
            this.fitnes2 = 28-(this.totalAttacksTablero(this.tableroBase2)/2);
            this.fitnes3 = 28-(this.totalAttacksTablero(this.tableroBase3)/2);
            let totalFitnes =  this.fitnes1 +  this.fitnes2 +  this.fitnes3;

            this.porcentaje1 =  Math.round((this.fitnes1/totalFitnes)*100);
            this.porcentaje2 =  Math.round((this.fitnes2/totalFitnes)*100);
            this.porcentaje3 =  Math.round((this.fitnes3/totalFitnes)*100);
        },
        ejecutarAsignacion() {
            this.limpiarTablero(this.tableroBase1);
            this.limpiarTablero(this.tableroBase2);
            this.limpiarTablero(this.tableroBase3);

            this.limpiarTablero(this.tableroHijo1);
            this.limpiarTablero(this.tableroHijo2);

            this.limpiarTablero(this.tableroMutacion1);
            this.limpiarTablero(this.tableroMutacion2);
        
            this.parent1 = this.genRandomArrayValues();
            this.parent2 = this.genRandomArrayValues();
            this.parent3 = this.genRandomArrayValues();

            this.setQueens(this.parent1, this.tableroBase1);
            this.setQueens(this.parent2, this.tableroBase2);
            this.setQueens(this.parent3, this.tableroBase3);

            this.fitnes1 = 28-(this.totalAttacksTablero(this.tableroBase1)/2);
            this.fitnes2 = 28-(this.totalAttacksTablero(this.tableroBase2)/2);
            this.fitnes3 = 28-(this.totalAttacksTablero(this.tableroBase3)/2);

            let totalFitnes =  this.fitnes1 +  this.fitnes2 +  this.fitnes3;
            this.porcentaje1 =  Math.round((this.fitnes1/totalFitnes)*100);
            this.porcentaje2 =  Math.round((this.fitnes2/totalFitnes)*100);
            this.porcentaje3 =  Math.round((this.fitnes3/totalFitnes)*100);

            let porcentajes = [this.porcentaje1,this.porcentaje2,this.porcentaje3];
            porcentajes.sort((a, b) => b - a);
            let porcentajesMayores = [porcentajes[0],porcentajes[1]];
            
            if(porcentajesMayores[0]==this.porcentaje1) {
                this.selectParent1 = this.parent1;
            }
            if(porcentajesMayores[0]==this.porcentaje2) {
                this.selectParent1 = this.parent2;
            }
            if(porcentajesMayores[0]==this.porcentaje3) {
                this.selectParent1 = this.parent3;
            }
            
            if(porcentajesMayores[1]==this.porcentaje3) {
                this.selectParent2 = this.parent3;
            }
            if(porcentajesMayores[1]==this.porcentaje2) {
                this.selectParent2 = this.parent2;
            }
            if(porcentajesMayores[1]==this.porcentaje1) {
                this.selectParent2 = this.parent1;
            }

            this.hijo1 = [
                this.selectParent1[0], this.selectParent1[1],
                this.selectParent1[2], this.selectParent1[3],
                this.selectParent2[4], this.selectParent2[5],
                this.selectParent2[6], this.selectParent2[7]
            ];
            this.hijo2 = [
                this.selectParent1[4], this.selectParent1[5],
                this.selectParent1[6], this.selectParent1[7],
                this.selectParent2[0], this.selectParent2[1],
                this.selectParent2[2], this.selectParent2[3]
            ];

            this.setQueens(this.hijo1,this.tableroHijo1);
            this.setQueens(this.hijo2,this.tableroHijo2);

            this.fitnesHijo1 = 28-(this.totalAttacksTablero(this.tableroHijo1)/2);
            this.fitnesHijo2 = 28-(this.totalAttacksTablero(this.tableroHijo2)/2);

            let totalFitnesHijos = this.fitnesHijo1 +  this.fitnesHijo2;

            this.porcentajeHijo1 =  Math.round((this.fitnesHijo1/totalFitnesHijos)*100);
            this.porcentajeHijo2 =  Math.round((this.fitnesHijo2/totalFitnesHijos)*100);

            let posMutacion1R1 = Math.floor((Math.random() * (8 - 1 + 1)) + 1)-1;
            let posMutacion1R2 = Math.floor((Math.random() * (8 - 1 + 1)) + 1)-1;
            let value1Mutacion1 = Math.floor((Math.random() * (8 - 1 + 1)) + 1);
            let value2Mutacion1 = Math.floor((Math.random() * (8 - 1 + 1)) + 1);

            let temp1 = [...this.hijo1];
            temp1[posMutacion1R1] = value1Mutacion1;
            temp1[posMutacion1R2] = value2Mutacion1;
            this.mutacion1 = [...temp1];

            let posMutacion2R1 = Math.floor((Math.random() * (8 - 1 + 1)) + 1)-1;
            let posMutacion2R2 = Math.floor((Math.random() * (8 - 1 + 1)) + 1)-1;
            let value1Mutacion2 = Math.floor((Math.random() * (8 - 1 + 1)) + 1);
            let value2Mutacion2 = Math.floor((Math.random() * (8 - 1 + 1)) + 1);

            let temp2 = [...this.hijo2];
            temp2[posMutacion2R1] = value1Mutacion2;
            temp2[posMutacion2R2] = value2Mutacion2;
            this.mutacion2 = [...temp2];

            this.setQueens(this.mutacion1,this.tableroMutacion1);
            this.setQueens(this.mutacion2,this.tableroMutacion2);

            this.fitnesMutacion1 = 28-(this.totalAttacksTablero(this.tableroMutacion1)/2);
            this.fitnesMutacion2 = 28-(this.totalAttacksTablero(this.tableroMutacion2)/2);

            let totalFitnesMutaciones = this.fitnesMutacion1 +  this.fitnesMutacion2;

            this.porcentajeMutacion1 =  Math.round((this.fitnesMutacion1/totalFitnesMutaciones)*100);
            this.porcentajeMutacion2 =  Math.round((this.fitnesMutacion2/totalFitnesMutaciones)*100);
        }
    },
    mounted() {
        this.ejecutarAsignacion();
        this.totalSoluciones = this.totalSolutionsNQueens(8);
    }
})

app.mount('#myApp')