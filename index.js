//Напишите функцию, которая будет вызываться при клике на кнопку "Добавить". Функция должна получать значение из поля ввода и добавлять новую задачу в список.
//Находим необходимые элементы DOM и записываем в переменные
const inputTask = document.querySelector('.inputTask');
const button = document.getElementById('button');
const taskList = document.querySelector('.taskList');

// Создаем функцию createTask(). Внутри функции:
//     Создаем новый элемент списка с помощью метода (createElement)
//     Присваиваем текст из поля ввода в качестве содержимого новой задачи (textContent)
//     Добавляем новую задачу в список с помощью метода (append)
//     Очищаем поле ввода

function createTask () {
const newTask = document.createElement('li');
newTask.textContent = inputTask.value;
taskList.append(newTask);
inputTask.value = '';
}
button.addEventListener('click', createTask);

//Напишите функцию, которая будет вызываться при клике на задачу в списке. Функция должна отмечать задачу как выполненную путём изменения её класса.
function checkTask (event) {
    const eventTarget = event.target;
    eventTarget.classList.toggle ('completed')
}
taskList.addEventListener('click', checkTask);
// Создаем функцию checkTask(). Внутри функции:
//     Проверяем, что кликнули на элемент списка (event.target)
//     Если условие выполняется, то переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка (element.classList.toggle)
// Добавляем функцию-обработчик к событию клика на кнопку (addEventListener)
// Добавляем функцию-обработчик к событию клика на список задач (addEventListener)
 