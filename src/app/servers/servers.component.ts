import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
  templateUrl: `./servers.component.html`,
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
}
