const TaskList = require('../lib/taskList');

describe('TaskList', () => {
    describe('render unordered list', () => {
        it('verifies the unordered list with tasks renders correctly', () => {
            const taskList = new TaskList(['Unordered List With Tasks']);
            const htmlString = `<ul class="tasks">Unordered List With Tasks</ul>`;
            expect(taskList.render()).toEqual(htmlString);
        });
    });
});