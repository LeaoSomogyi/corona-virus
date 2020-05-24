import { GlobalResumeData } from './global-resume-data.model';

export class GlobalResume {
    results: Array<GlobalResumeData>;

    constructor() {
        this.results = new Array<GlobalResumeData>();
    }
}