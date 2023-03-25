import { Category } from "./category";

describe("Category Unit Test", () => {
    test('constructor of cateogry', () => {
        const NAME_CATEGORY = "Movie";
        const category = new Category(NAME_CATEGORY);

        expect(category.name).toBe(NAME_CATEGORY);
    });
});