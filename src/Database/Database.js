import Dexie from "dexie";
import 'dexie';

export const db = new Dexie('stickies');

db.version(1).stores({ tabs: 'tabName,tasks' })

export const addTab = (tabName) => {
    const tab = {
        tabName,
        tasks: []
    }
    db.table('tabs').add(tab)
}

export const deleteTab = (tabName) => {
    db.tabs.delete(tabName)
}

export const addTaskToTab = (tabName, taskName) => {
    db.tabs.where('tabName').equals(tabName).modify(x => x.tasks.push({taskName, isCompleted: false}))
}

export const updateTabName = (oldTabName, newTabName) => {
    
    let tab = null;
    db.tabs.get(oldTabName, function(result) {
        tab = result;
        db.tabs.delete(oldTabName)

        const newTab = {
            tabName: newTabName,
            tasks: tab.tasks
        }

        db.tabs.add(newTab)
    })
}

export const updateTaskName = (tabName, oldTaskName, newTaskName) => {
    let tab = null;
    db.tabs.get(tabName, function(result) {
        tab = result;
        tab.tasks.forEach(task => {
            if(task.taskName === oldTaskName) {
                task.taskName = newTaskName;
            }
        })   
        db.tabs.update(tabName, {tasks: tab.tasks})
    }) 

}
