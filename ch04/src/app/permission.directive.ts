import {Directive, Input, TemplateRef, ViewContainerRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {

  @Input() public appPermission: string[];

  private currentRole = 'agent';

  constructor(private tmplRef: TemplateRef<HTMLElement>, private vc: ViewContainerRef) {
  }

  ngOnInit(): void {
    console.log(this.tmplRef, this.vc);
    if (this.appPermission.indexOf(this.currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }

}
