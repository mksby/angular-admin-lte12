import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent } from './header.component';
export { HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent } from './header.component';
export class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                exports: [HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent],
                declarations: [HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9sYXlvdXQvaGVhZGVyL2hlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRyxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRbkcsTUFBTSxPQUFPLFlBQVk7OztZQUx4QixRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBRTtnQkFDdEMsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDO2dCQUN4RSxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUM7YUFDaEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCwgSGVhZGVyTG9nb0NvbXBvbmVudCwgSGVhZGVyTG9nb01pbmlDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuXG5leHBvcnQgeyBIZWFkZXJDb21wb25lbnQsIEhlYWRlckxvZ29Db21wb25lbnQsIEhlYWRlckxvZ29NaW5pQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSBdLFxuICAgIGV4cG9ydHM6IFtIZWFkZXJDb21wb25lbnQsIEhlYWRlckxvZ29Db21wb25lbnQsIEhlYWRlckxvZ29NaW5pQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtIZWFkZXJDb21wb25lbnQsIEhlYWRlckxvZ29Db21wb25lbnQsIEhlYWRlckxvZ29NaW5pQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUgeyB9XG4iXX0=