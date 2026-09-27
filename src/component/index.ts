
import type { Todo } from "../entities/Todo";

const todos = [
    {
        id: 1,
        title: 'Html',
        complated: false
    },
    {
        id: 2,
        title: 'css',
        complated: false
    },
    {
        id: 3,
        title: 'javascript',
        complated: false
    },
    {
        id: 4,
        title: 'typescript',
        complated: false
    },
    {
        id: 5,
        title: 'react',
        complated: false
    },
]

export const fetchTodos = async (query = ''): Promise<Todo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(' Received Todos');
    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
    );
    return [...filteredTodos]
}

export const addTodo = async (todo: Pick<Todo, 'title'>): Promise<Todo> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newTodo = {
        id: todos.length + 1,
        title: todo.title,
        complated: false
    }
    todos.push(newTodo);
    return newTodo
}