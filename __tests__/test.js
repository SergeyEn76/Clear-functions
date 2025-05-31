import {healthStatus} from '../src/js/basic.js';
test('check health more 90', () => {
    const result = healthStatus({name: 'Stone', health: 90});
    expect(result).toBe('healthy');
});

test('check middle health from 15 to 50', () => {
    const result = healthStatus({name: 'Branch', health: 35});
    expect(result).toBe('wounded');
});

test('check critical health less than 15', () => {
    const result = healthStatus({name: 'Flower', health: 10});
    expect(result).toBe('critical');
});