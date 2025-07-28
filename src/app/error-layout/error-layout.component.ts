import { Component, inject, Renderer2 } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-error-layout',
    imports: [RouterModule],
    templateUrl: './error-layout.component.html',
    styles: ``
})
export class ErrorLayoutComponent {
  private renderer = inject(Renderer2)

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-primary-subtle')
    this.renderer.addClass(document.body, 'bg-opacity-10')
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-primary-subtle')
    this.renderer.removeClass(document.body, 'bg-opacity-10')
  }
}
