import { DOCUMENT } from '@angular/common'
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  Inject,
  Renderer2,
} from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import * as feather from 'feather-icons'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
    selector: 'app-topbar',
    imports: [NgbDropdownModule, SimplebarAngularModule, RouterLink],
    templateUrl: './topbar.component.html',
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopbarComponent {
  isSidebarVisible = true
  isFullscreen: boolean = false

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: any
  ) {}

  elem: any

  ngOnInit() {
    this.elem = document.documentElement

    this.updateOnWindowResize()
  }

  onToggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible
    this.updateBodyAttribute()
  }

  updateBodyAttribute() {
    const body = this.el.nativeElement.ownerDocument.body
    if (this.isSidebarVisible) {
      this.renderer.setAttribute(body, 'data-sidebar', 'default')
    } else {
      this.renderer.setAttribute(body, 'data-sidebar', 'hidden')
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateOnWindowResize()
  }

  updateOnWindowResize() {
    const body = document.body
    if (window.innerWidth < 1040) {
      this.renderer.setAttribute(body, 'data-sidebar', 'hidden')
    } else {
      this.renderer.setAttribute(body, 'data-sidebar', 'default')
    }
  }
  openFullscreen() {
    const elem: any = document.documentElement
    console.log(this.isFullscreen)
    if (!this.isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      }
      this.isFullscreen = true
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      this.isFullscreen = false
    }

    setTimeout(() => {
      feather.replace()
    })
  }
}
