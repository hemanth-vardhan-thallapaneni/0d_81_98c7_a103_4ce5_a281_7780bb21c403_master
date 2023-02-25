import { Component, OnInit } from "@angular/core";
import { Survey } from "../types/Survey";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  statuses: string[] = ["All", "Active", "Completed"];
  categories: string[] = ["Development", "Workplace", "Hardware"];
  filteredList: Survey[];
  filterMap = {};
  status = "status";
  category = "category";

  surveyList: Survey[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    },
  ];

  ngOnInit() {}

  onFilterSelected(filter: string, type: string) {
    this.filterMap[type] = filter;
    if (filter == "All") delete this.filterMap[type];
    this.filteredList = this.surveyList.filter((item: any) => {
      for (var key in this.filterMap) {
        if (item[key] != this.filterMap[key]) {
          return false;
        }
      }
      return true;
    });
    console.log(this.filterMap);
  }
}
