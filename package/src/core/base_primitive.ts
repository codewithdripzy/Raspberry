import { Widget } from "./base";
import { Element, createElement } from "./engine";

export abstract class PrimitiveWidget extends Widget {
  abstract createElement(): PrimitiveElement;
}

export abstract class PrimitiveElement extends Element {
  constructor(widget: Widget) {
    super(widget);
  }

  mount(parent: HTMLElement): void {
    const dom = this.render();
    this._dom = dom;
    parent.appendChild(dom);
    this.mountChildren(dom);
  }

  update(newWidget: Widget): void {
    this._widget = newWidget;
    this.rebuild();
  }

  abstract render(): HTMLElement;
  abstract mountChildren(parent: HTMLElement): void;

  protected rebuild(): void {
    if (!this._dom) return;
    const parent = this._dom.parentElement;
    if (parent) {
      const oldDom = this._dom;
      const newDom = this.render();
      this._dom = newDom;
      parent.replaceChild(newDom, oldDom as Node);
      this.mountChildren(newDom);
    }
  }
}
