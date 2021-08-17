import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsModule } from '../animations/animations.module';
import { ColorModule } from '../color/color.module';
import { BoxHeaderDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective } from './box.directive';
import { BoxComponent } from './box.component';
export { BoxHeaderDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective } from './box.directive';
export { BoxComponent } from './box.component';
export class BoxModule {
}
BoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AnimationsModule, ColorModule],
                exports: [BoxComponent, BoxHeaderDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective],
                declarations: [BoxComponent, BoxHeaderDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9ib3gvYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVEvQyxNQUFNLE9BQU8sU0FBUzs7O1lBTHJCLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUcsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDO2dCQUN2RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ3ZHLFlBQVksRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQzthQUMvRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBDb2xvck1vZHVsZSB9IGZyb20gJy4uL2NvbG9yL2NvbG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBCb3hIZWFkZXJEaXJlY3RpdmUsIEJveENvbnRlbnREaXJlY3RpdmUsIEJveEZvb3RlckRpcmVjdGl2ZSwgQm94VG9vbHNEaXJlY3RpdmUgfSBmcm9tICcuL2JveC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQm94Q29tcG9uZW50IH0gZnJvbSAnLi9ib3guY29tcG9uZW50JztcblxuZXhwb3J0IHsgQm94SGVhZGVyRGlyZWN0aXZlLCBCb3hDb250ZW50RGlyZWN0aXZlLCBCb3hGb290ZXJEaXJlY3RpdmUsIEJveFRvb2xzRGlyZWN0aXZlIH0gZnJvbSAnLi9ib3guZGlyZWN0aXZlJztcbmV4cG9ydCB7IEJveENvbXBvbmVudCB9IGZyb20gJy4vYm94LmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCAgQW5pbWF0aW9uc01vZHVsZSwgQ29sb3JNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtCb3hDb21wb25lbnQsIEJveEhlYWRlckRpcmVjdGl2ZSwgQm94Q29udGVudERpcmVjdGl2ZSwgQm94Rm9vdGVyRGlyZWN0aXZlLCBCb3hUb29sc0RpcmVjdGl2ZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQm94Q29tcG9uZW50LCBCb3hIZWFkZXJEaXJlY3RpdmUsIEJveENvbnRlbnREaXJlY3RpdmUsIEJveEZvb3RlckRpcmVjdGl2ZSwgQm94VG9vbHNEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEJveE1vZHVsZSB7fVxuIl19