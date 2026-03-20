import { Widget } from "../../core/base";
import { createElement } from "../../core/engine";
import { PrimitiveWidget, PrimitiveElement } from "../../core/base_primitive";

export interface PaddingProps {
  key?: any;
  padding: string; // "10px" or "10px 20px"
  child: Widget;
}

class _Padding extends PrimitiveWidget {
  readonly props: PaddingProps;
  constructor(props: PaddingProps) {
    super({ key: props.key });
    this.props = props;
  }
  createElement(): PrimitiveElement {
    return new PaddingElement(this);
  }
}
export const Padding = (props: PaddingProps) => new _Padding(props);

class PaddingElement extends PrimitiveElement {
  render(): HTMLElement {
    const props = (this._widget as _Padding).props;
    const div = document.createElement("div");
    div.style.padding = props.padding;
    div.style.boxSizing = "border-box";
    div.style.width = "fit-content";
    div.style.height = "fit-content";
    return div;
  }
  mountChildren(parent: HTMLElement): void {
     const props = (this._widget as _Padding).props;
     const el = createElement(props.child);
     this._children = [el];
     el.mount(parent);
  }
}
