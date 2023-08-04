const TaskListItem = require('../lib/taskListItem');

describe('TaskListItem', () => {
    describe('render list item', () => {
        it('verifies that the list item renders correctly.', () => {
            const taskListItem = new TaskListItem(['Component Array Element 1']);
            const htmlString = `<li class="tasks-item">Component Array Element 1</li>`
            expect(taskListItem.render()).toEqual(htmlString);
        });
    });

    describe('render priority list item', () => {
        it('verifies that the priority list item renders correctly.', () => {
            const taskListItem = new TaskListItem(['Component Array Element 2'], true);
            const htmlString = `<li class="tasks-item tasks-item-priority">Component Array Element 2</li>`
            expect(taskListItem.render()).toEqual(htmlString);
        });
    });
});