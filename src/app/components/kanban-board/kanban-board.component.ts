import {
  Component,
  ViewChildren,
  type QueryList,
  type AfterViewInit,
} from "@angular/core";
import type { CdkDropList } from "@angular/cdk/drag-drop";

interface Job {
  orderNo: string;
  jobCardNo: string;
  bookingDate: string;
  deliveryDate: string;
  createdBy: string;
  currentWorker: string;
  status: string;
  comments?: string;
}

interface Stage {
  name: string;
  code: string;
  jobs: Job[];
  color: string;
}

@Component({
  selector: "app-kanban-board",
  templateUrl: "./kanban-board.component.html",
  styleUrls: ["./kanban-board.component.css"],
})
export class KanbanBoardComponent implements AfterViewInit {
  @ViewChildren("dropZone") dropZones: QueryList<CdkDropList>;
  connectedLists: CdkDropList[] = [];
  selectedJob: Job | null = null;
  showJobDetailsModal = false;
  activeTab: "prescription" | "comments" = "prescription";

  stages: Stage[] = [
    {
      name: "Order Received",
      code: "ORDER_RECEIVED",
      jobs: [],
      color: "bg-blue-100 border-blue-400",
    },
    {
      name: "Material Ready",
      code: "MATERIAL_READY",
      jobs: [],
      color: "bg-yellow-100 border-yellow-400",
    },
    {
      name: "In Production",
      code: "IN_PRODUCTION",
      jobs: [],
      color: "bg-purple-100 border-purple-400",
    },
    {
      name: "Finalizing / QC",
      code: "FINALIZING",
      jobs: [],
      color: "bg-pink-100 border-pink-400",
    },
    {
      name: "Ready for Delivery",
      code: "READY_FOR_DELIVERY",
      jobs: [],
      color: "bg-amber-100 border-amber-400",
    },
    {
      name: "Delivered",
      code: "DELIVERED",
      jobs: [],
      color: "bg-green-100 border-green-400",
    },
  ];

  showAddJobModal = false;
  selectedStageIndex = 0;
  newJob = this.getEmptyJob();

  constructor() {
    this.stages[0].jobs = [
      {
        orderNo: "ORD-2025-0034",
        jobCardNo: "JOB-0012",
        bookingDate: "2025-10-30",
        deliveryDate: "2025-11-02",
        createdBy: "SalesUser01",
        currentWorker: "Technician01",
        status: "ORDER_RECEIVED",
      },
    ];
  }

  ngAfterViewInit() {
    this.connectedLists = this.dropZones.toArray();
  }

  onDrop(event: any, targetStageIndex: number) {
    console.log("[v0] Drop event:", {
      from: event.previousContainer.data,
      to: targetStageIndex,
      previousIndex: event.previousIndex,
      currentIndex: event.currentIndex,
    });

    const sourceStageIndex = event.previousContainer.data;
    const jobIndex = event.previousIndex;

    if (sourceStageIndex !== targetStageIndex) {
      const job = this.stages[sourceStageIndex].jobs[jobIndex];
      this.stages[sourceStageIndex].jobs.splice(jobIndex, 1);
      this.stages[targetStageIndex].jobs.splice(event.currentIndex, 0, job);
      job.status = this.stages[targetStageIndex].code;
      console.log(
        "[v0] Job moved from",
        this.stages[sourceStageIndex].code,
        "to",
        this.stages[targetStageIndex].code
      );
    } else if (event.previousIndex !== event.currentIndex) {
      const job = this.stages[sourceStageIndex].jobs[jobIndex];
      this.stages[sourceStageIndex].jobs.splice(jobIndex, 1);
      this.stages[sourceStageIndex].jobs.splice(event.currentIndex, 0, job);
    }
  }

  moveJob(
    currentStageIndex: number,
    jobIndex: number,
    direction: "next" | "prev"
  ) {
    const stage = this.stages[currentStageIndex];
    const job = stage.jobs[jobIndex];

    if (direction === "next" && currentStageIndex < this.stages.length - 1) {
      stage.jobs.splice(jobIndex, 1);
      this.stages[currentStageIndex + 1].jobs.push(job);
      job.status = this.stages[currentStageIndex + 1].code;
      console.log("[v0] Job moved next:", job.orderNo);
    } else if (direction === "prev" && currentStageIndex > 0) {
      stage.jobs.splice(jobIndex, 1);
      this.stages[currentStageIndex - 1].jobs.push(job);
      job.status = this.stages[currentStageIndex - 1].code;
      console.log("[v0] Job moved prev:", job.orderNo);
    }
  }

  openAddJobModal(stageIndex: number) {
    this.selectedStageIndex = stageIndex;
    this.showAddJobModal = true;
    this.newJob = this.getEmptyJob();
  }

  closeAddJobModal() {
    this.showAddJobModal = false;
    this.newJob = this.getEmptyJob();
  }

  addJob() {
    if (this.newJob.orderNo.trim() && this.newJob.jobCardNo.trim()) {
      const job: Job = {
        ...this.newJob,
        status: this.stages[this.selectedStageIndex].code,
      };
      this.stages[this.selectedStageIndex].jobs.push(job);
      console.log("[v0] New job added:", job.orderNo);
      this.closeAddJobModal();
    } else {
      alert("Please fill in all required fields");
    }
  }

  private getEmptyJob(): Job {
    const today = new Date().toISOString().split("T")[0];
    return {
      orderNo: "",
      jobCardNo: "",
      bookingDate: today,
      deliveryDate: today,
      createdBy: "CurrentUser",
      currentWorker: "Technician01",
      status: "",
    };
  }
  openJobDetails(job: Job) {
  this.selectedJob = job;
  this.showJobDetailsModal = true;
  this.activeTab = 'prescription';
}

closeJobDetails() {
  this.showJobDetailsModal = false;
  this.selectedJob = null;
}

setActiveTab(tab: 'prescription' | 'comments') {
  this.activeTab = tab;
}
saveComment() {
  if (this.selectedJob) {
    alert(`Comment saved: ${this.selectedJob.comments || "(empty)"}`);
    // optionally close modal or just show confirmation
    console.log("[v0] Comment added to", this.selectedJob.orderNo, ":", this.selectedJob.comments);
  }
}

}
