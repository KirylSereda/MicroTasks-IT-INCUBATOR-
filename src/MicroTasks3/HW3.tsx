import { useState } from 'react';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';
import s from './HW3.module.css'

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function HW3() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        { id: todolistID1, title: 'What to learn', filter: 'all' },
        { id: todolistID2, title: 'What to buy', filter: 'all' },
    ])


    let [tasks, setTasks] = useState({
        [todolistID1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],
        [todolistID2]: [
            { id: v1(), title: "HTML&CSS2", isDone: true },
            { id: v1(), title: "JS2", isDone: true },
            { id: v1(), title: "ReactJS2", isDone: false },
            { id: v1(), title: "Rest API2", isDone: false },
            { id: v1(), title: "GraphQL2", isDone: false },
        ]
    });

    function removeTask(id: string, todoListsId: string) {
        setTasks({ ...tasks, [todoListsId]: tasks[todoListsId].filter(t => t.id !== id) });
    }

    function addTask(title: string, todoListsId: string) {
        setTasks({ ...tasks, [todoListsId]: [...tasks[todoListsId], { id: v1(), title: title, isDone: false }] });
    }

    function changeStatus(taskId: string, isDone: boolean, todoListsId: string) {
        setTasks({
            ...tasks,
            [todoListsId]: tasks[todoListsId].map(t => t.id === taskId ? { ...t, isDone } : t)
        });
    }

    function changeFilter(filter: FilterValuesType, todoListsId: string) {
        setTodolists(todolists.map(tl => tl.id == todoListsId ? { ...tl, filter } : tl))
    }

    const todoListsFoRender = todolists.map(tl => {
        let tasksForTodoList = tasks[tl.id]

        if (tl.filter === "active") {
            tasksForTodoList = tasksForTodoList.filter(t => t.isDone === false);
        }
        if (tl.filter === "completed") {
            tasksForTodoList = tasksForTodoList.filter(t => t.isDone === true);
        }
        return (
            <Todolist
                key={tl.id}
                title={tl.title}
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={tl.filter}
                todoListsId={tl.id}
            />
        )
    });

    return (
        <div className={s.HW}>
            {todoListsFoRender}
        </div>
    );
}

export default HW3;
