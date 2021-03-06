import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimationsModule } from '../../animations/animations.module';
import { SidebarLeftToggleDirective } from './sidebar-left.directive';
import { SidebarLeftComponent } from './sidebar-left.component';
export { SidebarLeftToggleDirective } from './sidebar-left.directive';
export { SidebarLeftComponent } from './sidebar-left.component';
export class SidebarLeftModule {
}
SidebarLeftModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, AnimationsModule],
                exports: [SidebarLeftComponent],
                declarations: [SidebarLeftToggleDirective, SidebarLeftComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1sZWZ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9sYXlvdXQvc2lkZWJhci1sZWZ0L3NpZGViYXItbGVmdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBUWhFLE1BQU0sT0FBTyxpQkFBaUI7OztZQUw3QixRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztnQkFDdkQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLG9CQUFvQixDQUFDO2FBQ25FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBTaWRlYmFyTGVmdFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vc2lkZWJhci1sZWZ0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTaWRlYmFyTGVmdENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1sZWZ0LmNvbXBvbmVudCc7XG5leHBvcnQgeyBTaWRlYmFyTGVmdFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vc2lkZWJhci1sZWZ0LmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBTaWRlYmFyTGVmdENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1sZWZ0LmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEFuaW1hdGlvbnNNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtTaWRlYmFyTGVmdENvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbU2lkZWJhckxlZnRUb2dnbGVEaXJlY3RpdmUsIFNpZGViYXJMZWZ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTGVmdE1vZHVsZSB7fVxuIl19