import { Component, Output, EventEmitter } from "@angular/core";
import { EventManager } from "@angular/platform-browser";

@Component({
  selector: "app-filters",
  templateUrl: "filters.component.html",
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] = ["shoes", "sports"];
  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
