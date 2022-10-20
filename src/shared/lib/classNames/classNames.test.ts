import {classNames} from './classNames';


describe('classNames', () => {
  test('class, without Mods, without additional', () => {
    const expected = 'someClass';
    expect(classNames(
        'someClass'))
        .toBe(expected);
  });
  test('class, without Mods, additional', () => {
    const expected = 'someClass class1 class2';
    expect(classNames(
        'someClass',
        {},
        ['class1', 'class2']))
        .toBe(expected);
  });
  test('class, mods, additional', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames(
        'someClass',
        {hovered: true, scrollable: true},
        ['class1', 'class2']))
        .toBe(expected);
  });
  test('class, mod with false mod, additional', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
        'someClass',
        {hovered: true, scrollable: false},
        ['class1', 'class2']))
        .toBe(expected);
  });
  test('class, mod with undefined mod, additional', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
        'someClass',
        {hovered: true, scrollable: undefined},
        ['class1', 'class2']))
        .toBe(expected);
  });
});
