import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule for ngIf, ngFor, etc.
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  selectedImage: string | null = null;

  clickme(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeLightbox() {
    this.selectedImage = null;
  }

  
}

