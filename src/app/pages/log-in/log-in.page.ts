import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../models/UserLogin';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  userLogin: UserLogin;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              public toastController: ToastController) {
    this.userLogin = new UserLogin();
  }

  ngOnInit() {
  }

  onSubmitCredentials() {
      this.authenticationService.checkUserLogin(this.userLogin).subscribe(loginRs => {
          if (loginRs) {
              this.router.navigateByUrl('/tabs');
          } else {
              // Creates a toast with an error
             this.presentToast();
          }
      });
  }

    createAccount() {
      this.router.navigateByUrl('register');
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Invalid Credentials',
            color: 'danger',
            keyboardClose: true,
            translucent: true,
            duration: 2000
        });
        toast.present();
    }
}
