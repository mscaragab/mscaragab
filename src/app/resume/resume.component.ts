import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onDownloadResume() {
    window.location.href = '/assets/resume/Abdelfattah_Ragab_Resume.pdf';
  }
}
