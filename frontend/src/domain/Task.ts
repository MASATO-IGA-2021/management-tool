export interface Task {
    id: number;
    name: string;
    description: string;
    statusId: number;
    projectId: number;
    assignedTo: number;
    dueDate: Date;
    priority: string;
    milestoneId: number;
    createdAt: Date;
    updatedAt: Date;
}
