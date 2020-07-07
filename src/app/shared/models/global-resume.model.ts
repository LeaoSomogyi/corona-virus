import { GlobalResumeData } from '@models/global-resume-data.model';

export class GlobalResume {
    results: Array<GlobalResumeData>;

    constructor() {
        this.results = new Array<GlobalResumeData>();
    }
}