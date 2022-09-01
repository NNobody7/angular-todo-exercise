export class Todo{
    name: string;
    task: string;
    created: Date;
    due: Date;

    constructor(
        name: string, 
        task: string, 
        created: Date, 
        due: Date
    ) {
        this.name = name
        this.task = task
        this.created = created
        this.due = due
    }
}