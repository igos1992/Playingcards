import { it, expect } from '@jest/globals';
import { getCards } from './renderLevelGame';

it('should get cards flip side are', () => {
    const lengthArray = getCards(2).length;
    const expectArray = 2;

    expect(lengthArray).toBe(expectArray);
});
