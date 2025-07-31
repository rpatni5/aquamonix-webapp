import {
    ApplicationRef,
    ComponentFactoryResolver,
    Injectable,
    Injector
  } from '@angular/core';
  import { ConfirmationPopupComponent } from './confirmation-popup.component';
  
  @Injectable({ providedIn: 'root' })
  export class ConfirmationDialogService {
    constructor(
      private appRef: ApplicationRef,
      private componentFactoryResolver: ComponentFactoryResolver,
      private injector: Injector
    ) {}
  
    confirm(title: string, message: string): Promise<'save' | 'discard' | 'cancel'> {
      return new Promise((resolve) => {
        const factory = this.componentFactoryResolver.resolveComponentFactory(ConfirmationPopupComponent);
        const componentRef = factory.create(this.injector);
  
        componentRef.instance.title = title;
        componentRef.instance.message = message;
  
        componentRef.instance.save.subscribe(() => {
          this.cleanup(componentRef);
          resolve('save');
        });
  
        componentRef.instance.discard.subscribe(() => {
          this.cleanup(componentRef);
          resolve('discard');
        });
  
        componentRef.instance.cancel.subscribe(() => {
          this.cleanup(componentRef);
          resolve('cancel');
        });
  
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);
      });
    }
  
    private cleanup(componentRef: any) {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }
  }
  