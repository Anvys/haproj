import { classNames } from './classNames';

describe('classNames', () => {
    test('1 param', () => {
        expect(classNames('myClass')).toBe('myClass');
    });
    test('with mod', () => {
        const expected = 'myClass selected';
        expect(classNames('myClass', { selected: true }))
            .toBe(expected);
    });
    test('with mods', () => {
        const expected = 'myClass selected hidden';
        expect(classNames('myClass', { selected: true, hidden: true }))
            .toBe(expected);
    });
    test('with false mods', () => {
        const expected = 'myClass selected hidden';
        expect(classNames('myClass', { selected: true, hidden: true, parsed: false }))
            .toBe(expected);
    });
    test('with false(undefined) mods', () => {
        const expected = 'myClass selected parsed';
        expect(classNames('myClass', { selected: true, hidden: undefined, parsed: true }))
            .toBe(expected);
    });
    test('with false(null) mods', () => {
        const expected = 'myClass selected parsed';
        expect(classNames('myClass', { selected: true, hidden: null, parsed: true }))
            .toBe(expected);
    });
    test('with additional params', () => {
        const expected = 'myClass class1 class2 asd';
        expect(classNames('myClass', {}, ['class1', 'class2', 'asd']))
            .toBe(expected);
    });
    test('with additional params and mods', () => {
        const expected = 'myClass selected parsed class1 class2 asd';
        expect(
            classNames(
                'myClass',
                { selected: true, hidden: null, parsed: true },
                ['class1', 'class2', 'asd'],
            ),
        )
            .toBe(expected);
    });
});
