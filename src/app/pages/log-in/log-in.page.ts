import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../models/UserLogin';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  userLogin: UserLogin;

  constructor(private authenticationService: AuthenticationService,
              private  router: Router,
              private navController: NavController) {
    this.userLogin = new UserLogin();
  }

  ngOnInit() {
  }

  onSubmitCredentials() {
      this.authenticationService.checkUserLogin(this.userLogin).subscribe(loginRs => {
          console.log('the response has been given');
          console.log(loginRs);
          if (loginRs) {
              console.log('hi im in');
              this.router.navigateByUrl('/tabs');
             //  this.navController.navigateForward('/tabs/tab2/(home:home)');
          }
      });
  }
}
