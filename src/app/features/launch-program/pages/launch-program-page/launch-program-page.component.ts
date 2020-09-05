import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { LaunchProgramService } from '../../services/launch-program.service';

@Component({
  selector: 'app-launch-program-page',
  templateUrl: './launch-program-page.component.html',
  styleUrls: ['./launch-program-page.component.scss']
})
export class LaunchProgramPageComponent implements OnInit, OnDestroy {

  launchPrograms = [];
  isLoading: boolean = false;
  filterSubscription: Subscription;

  constructor(
    private launchProgramService: LaunchProgramService,
    private activatedRoute: ActivatedRoute
  ) {
    this.filterSubscription = this.launchProgramService.getFilterObservable().subscribe(() => {
      const currentFilter = this.launchProgramService.getCurrentFilter();
      this.getAllLaunchPrograms(currentFilter);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.getAllLaunchPrograms(params);
      });
  }

  getAllLaunchPrograms(queryObj?) {
    this.launchPrograms = [];
    this.isLoading = true;
    this.launchProgramService.getLaunchPrograms(queryObj).subscribe(res => {
      this.launchPrograms = res;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      console.log("err", err);
    });
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

}
