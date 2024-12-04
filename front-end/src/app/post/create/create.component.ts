import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './create.component.html',
  styleUrls: ['./post-.component.scss']
})
export class PostCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(5)]],
      userId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  createPost(): void {
    if (this.form.valid) {
      this.postService.create(this.form.value).subscribe(() => {
        this.router.navigateByUrl('/posts');
      });
    }
  }
}
