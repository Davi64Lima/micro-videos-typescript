import { Category } from './category';

describe('Category', () => {
    test('should be defined', () => {
        const category = new Category({ name: 'Movie', is_active: true });
        expect(category.name).toBe('Movie');
    });
});