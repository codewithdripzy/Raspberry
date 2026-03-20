import { Widget } from "../../core/base";
import { createElement } from "../../core/engine";
import { PrimitiveWidget, PrimitiveElement } from "../../core/base_primitive";

export interface StackProps {
  key?: any;
  children: Widget[];
}

class _Stack extends PrimitiveWidget {
  readonly props: StackProps;
  constructor(props: StackProps) {
    super({ key: props.key });
    this.props = props;
  }
  createElement(): PrimitiveElement {
    return new StackElement(this);
  }
}
export const Stack = (props: StackProps) => new _Stack(props);

class StackElement extends PrimitiveElement {
  render(): HTMLElement {
    const div = document.createElement("div");
    div.style.position = "relative";
    div.style.width = "100%";
    div.style.height = "100%";
    return div;
  }
  mountChildren(parent: HTMLElement): void {
    const props = (this._widget as _Stack).props;
    this._children = props.children.map(child => {
       const el = createElement(child);
       el.mount(parent);
       return el;
    });
  }
}

// Positioned
export interface PositionedProps {
  key?: any;
  child: Widget;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

class _Positioned extends PrimitiveWidget {
  readonly props: PositionedProps;
  constructor(props: PositionedProps) {
    super({ key: props.key });
    this.props = props;
  }
  createElement(): PrimitiveElement {
    return new PositionedElement(this);
  }
}
export const Positioned = (props: PositionedProps) => new _Positioned(props);

class PositionedElement extends PrimitiveElement {
  render(): HTMLElement {
    const props = (this._widget as _Positioned).props;
    const div = document.createElement("div");
    div.style.position = "absolute";
    if (props.top) div.style.top = props.top;
    if (props.right) div.style.right = props.right;
    if (props.bottom) div.style.bottom = props.bottom;
    if (props.left) div.style.left = props.left;
    return div;
  }
  mountChildren(parent: HTMLElement): void {
    const props = (this._widget as _Positioned).props;
    const el = createElement(props.child);
    this._children = [el];
    el.mount(parent);
  }
}
