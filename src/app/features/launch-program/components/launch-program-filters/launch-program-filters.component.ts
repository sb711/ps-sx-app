import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LaunchProgramService } from '../../services/launch-program.service';

import { Filter } from '../../models/filter.model';

@Component({
  selector: 'app-launch-program-filters',
  templateUrl: './launch-program-filters.component.html',
  styleUrls: ['./launch-program-filters.component.scss']
})
export class LaunchProgramFiltersComponent implements OnInit, OnDestroy {

  launchYears: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  currentFilter: Filter = new Filter();
  filterSubscription: Subscription;

  constructor(
    private launchProgramService: LaunchProgramService,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentFilter = this.launchProgramService.getCurrentFilter();
    this.filterSubscription = this.launchProgramService.getFilterObservable().subscribe(() => {
      this.currentFilter = this.launchProgramService.getCurrentFilter();
      this.setUrlWithFilter(this.currentFilter);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if (Object.keys(params).length) {
          Object.keys(params).forEach(key => {
            const filterValue = (key === 'launch_year' ? parseInt(params[key]) : params[key] === 'true');
            this.currentFilter.setFilter(key, filterValue);
          });
        }
      });
  }

  onApplyingFilter(filterName: string, filterValue: number | boolean): void {
    this.launchProgramService.filterSelect({
      filterName: filterName,
      filterValue: filterValue
    });
  }

  setUrlWithFilter(currentFilter?: any) {
    const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, queryParams: currentFilter }).toString();
    this.location.go(url);
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

}
