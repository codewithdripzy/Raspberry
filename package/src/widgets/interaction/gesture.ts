import { Widget } from "../../core/base";
import { createElement } from "../../core/engine";
import { PrimitiveWidget, PrimitiveElement } from "../../core/base_primitive";

export interface GestureDetectorProps {
  key?: any;
  child: Widget;
  onTap?: () => void;
  onHover?: (isHovering: boolean) => void;
  cursor?: string;
}

class _GestureDetector extends PrimitiveWidget {
  readonly props: GestureDetectorProps;
  constructor(props: GestureDetectorProps) {
    super({ key: props.key });
    this.props = props;
  }
  createElement(): PrimitiveElement {
    return new GestureDetectorElement(this);
  }
}
export const GestureDetector = (props: GestureDetectorProps) => new _GestureDetector(props);

class GestureDetectorElement extends PrimitiveElement {
  render(): HTMLElement {
    const props = (this._widget as _GestureDetector).props;
    const div = document.createElement("div");
    // We try to make the wrapper as invisible as possible layout-wise
    div.style.display = "inline-block";
    div.style.width = "fit-content";
    div.style.height = "fit-content";
    
    if (props.cursor) {
      div.style.cursor = props.cursor;
    } else if (props.onTap) {
      div.style.cursor = "pointer";
    }
    return div;
  }

  mount(parent: HTMLElement): void {
    super.mount(parent);
    const props = (this._widget as _GestureDetector).props;
    if (props.onTap) {
      this._dom!.addEventListener("click", (e) => {
        e.stopPropagation();
        props.onTap!();
      });
    }
    if (props.onHover) {
       this._dom!.addEventListener("mouseenter", () => props.onHover!(true));
       this._dom!.addEventListener("mouseleave", () => props.onHover!(false));
    }
  }

  mountChildren(parent: HTMLElement): void {
    const props = (this._widget as _GestureDetector).props;
    const element = createElement(props.child);
    this._children = [element];
    element.mount(parent);
  }
}
