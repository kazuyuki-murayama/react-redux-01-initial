export const COUNT_UP = 'UP';
export const createCountUpAction = (count)  => ({
        type :COUNT_UP,
        payload : { count }
});

export const COUNT_DOWN = 'DOWN';
export const createCountDownAction = (count)  => ({
    type :COUNT_DOWN,
    payload : { count }
});
