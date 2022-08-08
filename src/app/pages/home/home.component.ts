import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  onAlert(): void {
    window.alert("Mensagem de teste!");
    //this.router.navigateByUrl("/login");
    this.router.navigate(['/dashboard', 'account']);
  }
}
