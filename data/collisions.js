const collisions = 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 1290, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 1290, 1290, 1290, 1290, 1290, 1290, 0, 0, 1290, 1290, 1290, 1290, 1290, 1290, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 1290, 1290, 1290, 1290, 1290,
    0, 0, 0, 0, 0, 1290, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290,
    0, 0, 0, 0, 0, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 0, 0, 0, 0, 0, 0, 0, 1290,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 1290, 1290, 1290, 1290, 1290, 0, 0, 1290,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 0, 0, 1290,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1290, 1290, 1290, 1290]