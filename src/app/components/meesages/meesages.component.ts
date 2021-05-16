import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service'; 
@Component({
  selector: 'app-meesages',
  templateUrl: './meesages.component.html',
  styleUrls: ['./meesages.component.css']
})
export class MeesagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }
  

  ngOnInit(): void {
  }

}
