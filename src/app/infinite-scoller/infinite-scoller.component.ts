import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-infinite-scoller',
  templateUrl: './infinite-scoller.component.html',
  styleUrls: ['./infinite-scoller.component.css'],
})
export class InfiniteScollerComponent implements OnDestroy, AfterViewInit {
  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor')
  anchor!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  constructor(private host: ElementRef) {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      ...this.options,
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }

  get element() {
    return this.host.nativeElement;
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return (
      style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll'
    );
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
