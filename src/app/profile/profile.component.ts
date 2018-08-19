import { Component, OnInit, ViewChildren, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  getProfile: any;
  repos: any;
  userData: any;
  searchText: any;
  languages = [''];
  types = ['', 'Forks', 'Archived'];
  selectedLanguage = this.languages[0];
  selectedType = this.types[0];
  showTypeFilter = false;
  showLanguageFilter = false;
  userId = null;
  showError = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.userId = route.snapshot.params.userId;
  }

  ngOnInit() {
    this.getRepos();
    this.getProfileData();
  }

  getProfileData() {
    this.apiService.getProfileData(this.userId).subscribe(
      (response: any) => {
        this.userData = JSON.parse(response._body);
      },
      error => {
        this.showError = true;
      }
    );
  }

  getRepos() {
    this.apiService.getRepos(this.userId).subscribe(
      (response: any) => {
        this.repos = JSON.parse(response._body);
        for (let i = 0; i < this.repos.length; i++) {
          if (this.repos[i].language && this.languages.indexOf(this.repos[i].language) === -1) {
            this.languages.push(this.repos[i].language);
          }
        }
      },
      error => {
        this.showError = true;
      }
    );
  }

  toggleTypeFilter() {
    this.showTypeFilter = !this.showTypeFilter;
    this.showLanguageFilter = false;
  }

  toggleLanguageFilter() {
    this.showLanguageFilter = !this.showLanguageFilter;
    this.showTypeFilter = false;
  }

  selectType(type) {
    this.selectedType = type;
    this.showTypeFilter = false;
  }

  selectLanguage(language) {
    this.selectedLanguage = language;
    this.showLanguageFilter = false;
  }

  clearFilter() {
    this.searchText = '';
    this.selectedLanguage = null;
    this.selectedType = null;
  }
}
