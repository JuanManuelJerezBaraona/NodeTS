import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {

    test('should create table with default values', () => {

        const createTable = new CreateTable();

        const table = createTable.execute({ base: 2 });

        const rows = table.split('\n');

        console.log(table);

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2');
        expect(table).toContain('2 x 10 = 20');
        expect(rows.length).toBe(10);

    });

});