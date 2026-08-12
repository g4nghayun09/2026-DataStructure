class Job {
    constructor(jobName, startTime, endTime) {
        this.jobName = jobName;
        this.startTime = startTime;
        this.endTime = endTime;
    }
} // Job

class IntervalScheduler {
    constructor() {
        this.jobs = [];
    }

    addJob(job) {
        this.jobs.push(job);
    }

    IntervalScheduling() {
        // this.jobs.sort((a, b)=>{
        //     return a.endTime - b.endTime;
        // });

        this.jobs.sort((a, b) => a.endTime - b.endTime);

        let result = [];

        for (let currentJob of this.jobs) {
            if (result.length == 0) result.push(currentJob);
            else if (result[result.length - 1].endTime <= currentJob.startTime)
                result.push(currentJob);
        }

        console.log(result);
    }

} // IntervalScheduler

let a = new Job("A", 0, 6);
let b = new Job("B", 1, 4);
let c = new Job("C", 3, 6);
let d = new Job("D", 3, 8);
let e = new Job("E", 4, 7);
let f = new Job("F", 5, 9);
let g = new Job("G", 6, 10);
let h = new Job("H", 8, 11);

let intervalScheduler = new IntervalScheduler();
intervalScheduler.addJob(a);
intervalScheduler.addJob(b);
intervalScheduler.addJob(c);
intervalScheduler.addJob(d);
intervalScheduler.addJob(e);
intervalScheduler.addJob(f);
intervalScheduler.addJob(g);
intervalScheduler.addJob(h);

intervalScheduler.IntervalScheduling();