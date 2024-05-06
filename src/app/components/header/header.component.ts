import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../models/profile.model';
import { ProfileService } from '../../services/profile.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  profile!: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data: Profile) => {
      this.profile = data;
    });
  }
}
