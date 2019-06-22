import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {UserAccount} from '../../models/UserAccount';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userAccount: UserAccount;
  confirmedPassword: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              public toastController: ToastController) { }

  ngOnInit() {
    this.userAccount = new UserAccount();
  }

  onSubmitCredentials() {
    // Check Passwords
    if (this.userAccount.password !== this.confirmedPassword) {
      this.presentToast();
    }
    // Call the Service
    this.authenticationService.createUserAccount(this.userAccount).subscribe( account => {
      if (account !== null) {
        this.router.navigateByUrl('/tabs');
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Passwords do not match',
      color: 'danger',
      keyboardClose: true,
      translucent: true,
      duration: 2000
    });
    toast.present();
  }
}
