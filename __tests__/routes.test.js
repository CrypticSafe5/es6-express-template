import { controllerWrapper } from '../src/bin/routes';

jest.mock(middleware);

describe('testing controllerWrapper', () => {
    test('passing controllerWrapper', () => {
        expect(controllerWrapper(() => {}, () => {}, () => {})).anything();
    });

    test('fail controllerWrapper', () => {
        expect(controllerWrapper()).toStrictEqual();
    });
});
