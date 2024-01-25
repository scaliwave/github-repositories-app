import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-repos-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './repos-list.component.html',
  styleUrl: './repos-list.component.css'
})
export class ReposListComponent implements OnInit {
  // arregl opara repositorios
  repositories: any[] = [];
  constructor(private githubService: GithubService) { }

  user = 'google';

  ngOnInit(): void {
    this.githubService.getTopRepos(this.user).subscribe(
      {
        next: resp => {
          this.repositories = resp;
        },
        error: err => {
          console.error('Error al obtener repositorios:', err.message);
        }
      }
    );
  }
}
    
