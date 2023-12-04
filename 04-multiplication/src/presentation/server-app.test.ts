import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';

describe('Server App', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        fileName: 'test-filename',
        fileDestination: 'test-destination'
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should create ServerApp instance', () => {
        
        const serverApp = new ServerApp();

        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');

    });

    test('should run ServerApp with options', () => {

        // const logSpy = jest.spyOn(console, 'log');
        // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        // const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        // ServerApp.run(options);

        // expect(logSpy).toHaveBeenCalledTimes(2);
        // expect(logSpy).toHaveBeenCalledWith('server running...');
        // expect(logSpy).toHaveBeenLastCalledWith('File created!');

        // expect(createTableSpy).toHaveBeenCalledTimes(1);
        // expect(createTableSpy).toHaveBeenCalledWith({ 
        //     base: options.base, 
        //     limit: options.limit
        // });

        // expect(saveFileSpy).toHaveBeenCalledTimes(1);
        // expect(saveFileSpy).toHaveBeenCalledWith({ 
        //     fileContent: createTableSpy.mock.results[0].value,
        //     fileDestination: options.fileDestination,
        //     fileName: options.fileName
        // });

    });

    test('should run with custom values mocked', () => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn();
        const saveFileMock = jest.fn();

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('server running...');
        expect(createMock).toHaveBeenLastCalledWith({
            "base": options.base, 
            "limit": options.limit
        });

    });

});