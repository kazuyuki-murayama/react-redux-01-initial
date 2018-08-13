export const COUNT_UP = 'UP';
export const createCountUpAction = (currentCount)  => ({
        type :COUNT_UP,
        payload : { currentCount }
});

export const COUNT_DOWN = 'DOWN';
export const createCountDownAction = (currentCount)  => ({
    type :COUNT_DOWN,
    payload : { currentCount }
});
