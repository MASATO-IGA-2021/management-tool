import { atom } from 'jotai';
import Project  from '../domain/Project';
import { Member } from '../domain/Member';
import { Milestone } from '../domain/Milestone';
import { Task } from '../domain/Task';
import { dumyMemberData, dumyMilestoneData, dumyProjectData, dumyTaskData } from '../api/createProject';


export const projectAtom = atom<Project[]>(
    dumyProjectData
);

export const memberAtom = atom<Member[]>(
    dumyMemberData
);

export const milestoneAtom = atom<Milestone[]>(
    dumyMilestoneData
);

export const taskAtom = atom<Task[]>(
    dumyTaskData
);